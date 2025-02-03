// "getExcelData" 함수로 데이터를 가져옵니다.
import { getExcelData } from "../getData";

// 알림 (Notice) 데이터를 생성하고 화면에 표시하는 함수
const drawNotice = (data) => {
  // 알림을 표시할 부모 컨테이너 요소를 선택합니다.
  const noticeContainer = document.querySelector(".news-notice-container .news-container");

  // 데이터를 순회하며 각 알림 아이템을 생성합니다.
  data.forEach((item) => {
    const { Url, Title, Content, Date } = item;

    // Date를 날짜와 월, 년도로 분리합니다.
    const [year, month, day] = Date.split(".").map((str) => str.trim());

    // 알림 아이템 컨테이너를 생성합니다.
    const noticeItem = document.createElement("a");
    noticeItem.href = Url;
    noticeItem.target = "_blank";
    noticeItem.classList.add("news-item");

    // 날짜 컨테이너를 생성합니다.
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("news-item__date-container");

    // 날짜를 나타내는 요소를 생성하고 설정합니다.
    const dateD = document.createElement("div");
    dateD.classList.add("news-item__date-d", "font-bold");
    dateD.textContent = day; // 날짜를 표시

    const dateYM = document.createElement("div");
    dateYM.classList.add("news-item__date-ym");
    dateYM.textContent = `${year}. ${month}`; // 년도와 월을 표시

    // 날짜 컨테이너에 날짜 요소를 추가합니다.
    dateContainer.appendChild(dateD);
    dateContainer.appendChild(dateYM);

    // 알림 내용 컨테이너를 생성하고 설정합니다.
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("news-item__content");

    const titleElement = document.createElement("p");
    titleElement.classList.add("news-item__title", "font-bold");
    titleElement.textContent = Title; // 알림 제목 설정

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("news-item__description");
    descriptionElement.textContent = Content + "..."; // 알림 내용 설정

    // 알림 내용 컨테이너에 제목과 내용을 추가합니다.
    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(descriptionElement);

    // 알림 아이콘을 생성합니다.
    const iconElement = document.createElement("p");
    iconElement.classList.add("news-item__icon");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-plus");
    iconElement.appendChild(icon);

    // 알림 아이템 컨테이너에 날짜, 내용, 아이콘을 추가합니다.
    noticeItem.appendChild(dateContainer);
    noticeItem.appendChild(contentContainer);
    noticeItem.appendChild(iconElement);

    // 알림 컨테이너에 알림 아이템을 추가합니다.
    noticeContainer.appendChild(noticeItem);
  });
};

// 알림 데이터를 가져오고 화면에 표시합니다.
const sheetName = "Notice";
getExcelData(sheetName, function (data) {
  drawNotice(data);
});
