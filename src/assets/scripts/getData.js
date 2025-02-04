export const getExcelData = async (sheetName, callback) => {
  try {
    if (!navigator.onLine) {
      console.error("❌ 인터넷 연결 없음");
      return;
    }
    
    // 🔥 Cloudflare Worker URL을 사용하여 API 요청
    // ✅ API 요청 URL (Cloudflare Workers)
    // const url = `https://little-firefly-f09.dongbum80.workers.dev/${sheetName}`;
    
    // 🔥 Cloudflare Pages URL을 사용하여 API 요청
    // ✅ API 요청 URL (Cloudflare Pages 에서 Cloudflare worker를 호출하게 됨)
    const url = `https://cloudflare-proxy-deo.pages.dev/api/${sheetName}`;
    
    console.log(`🚀 요청 URL: ${url}`);

    // ✅ fetch()를 사용하여 요청
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    console.log("🔍 응답 상태 코드:", response.status);

    if (!response.ok) {
      console.error(`❌ API 요청 실패 - 상태 코드: ${response.status}`);
      const errorText = await response.text();
      console.error(`❌ 오류 메시지: ${errorText}`);
      return;
    }

    const data = await response.json();
    console.log("✅ API 응답 데이터:", data);

    // ✅ 데이터 변환 후 콜백 실행
    const result = convertToKeyValue(data);
    callback(result);

  } catch (error) {
    console.error("❌ 네트워크 요청 중 오류 발생:", error);
  }
};


const convertToKeyValue = (data) => {
  const keys = data.values[0];
  const result = [];

  for (let i = 1; i < data.values.length; i++) {
    let obj = {};
    let row = data.values[i];
    for (let j = 0; j < keys.length; j++) {
      obj[keys[j]] = row[j];
    }
    result.push(obj);
  }
  return result;
};


// ✅ Google Drive에서 이미지를 가져오는 함수 (지수 백오프 + 캐싱 추가)
export function fetchDriveImageWithRetry(imageElement, imageID, size = "w1048", retries = 5, delay = 1000) {
  if (!imageID) {
    imageElement.src = "./images/empty.png";
    return;
  }

  let attempt = 0;

  function loadImage() {
    if (attempt >= retries) {
      console.error(`❌ 이미지 로딩 실패 (ID: ${imageID})`);
      imageElement.src = "./images/empty.png"; // 최종 실패 시 기본 이미지 표시
      return;
    }

    // Google Drive 이미지 URL 설정
    imageElement.src = `https://drive.google.com/thumbnail?id=${imageID}&sz=${size}`;

    // 🔥 onerror 이벤트 핸들러: 로드 실패 시 재시도
    imageElement.onerror = () => {
      console.warn(`⚠️ 이미지 로딩 실패, 재시도 중 (${attempt + 1}/${retries})...`);
      
      attempt++;
      setTimeout(loadImage, delay); // 백오프 알고리즘 적용 (점점 대기 시간 증가)
      
      // 지수 백오프 적용 (최대 64초 대기)
      delay = Math.min(delay * 2, 64000);
    };
  }

  loadImage(); // 첫 번째 로드 시도
}
