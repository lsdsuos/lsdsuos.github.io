export const getExcelData = (sheetName, callback) => {
  const xhr = new XMLHttpRequest();

  // 🔥 Cloudflare Worker URL을 사용하여 API 요청
  const url = `https://little-firefly-f09.dongbum80.workers.dev/${sheetName}`;
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      const result = convertToKeyValue(JSON.parse(response));
      callback(result);
    }
  };

  xhr.onerror = function () {
    console.error("요청 실패");
  };

  xhr.send();
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
