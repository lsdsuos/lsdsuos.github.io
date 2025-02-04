import { getExcelData, fetchDriveImageWithRetry } from "../getData";

const drawLabFacilities = (facilities) => {
  const listContainer = document.querySelector(
    ".lab_facilities__list-container"
  );

  facilities.forEach((facility) => {
    const listItem = document.createElement("div");
    listItem.classList.add("lab_facilities__list");

    const content = document.createElement("div");
    content.classList.add("lab_facilities__list__content");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add(
      "lab_facilities__list__content__image-container"
    );

    const image = document.createElement("img");
    image.classList.add("lab_facilities__list__content__image");
    // const imageUrl = facility.ImageID
    //   ? `https://drive.google.com/thumbnail?id=${facility.ImageID}`
    //   : "./images/empty.png";
    // image.src = imageUrl;

    // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)
    fetchDriveImageWithRetry(image, facility.ImageID);
    image.alt = facility.Name;

    imageContainer.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add(
      "lab_facilities__list__content__text-container"
    );

    const name = document.createElement("div");
    name.classList.add("lab_facilities__list__content__text-container__name");
    name.classList.add("font-bold");
    name.textContent = facility.Name;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add(
      "lab_facilities__list__content__text-container__info-container"
    );

    const model = document.createElement("div");
    model.classList.add("lab_facilities__list__content__text-container__model");
    model.textContent = "모델 : " + facility.Model;

    const company = document.createElement("div");
    company.classList.add(
      "lab_facilities__list__content__text-container__company"
    );
    company.textContent = "제조사 : " + facility.Company;

    const task = document.createElement("div");
    task.classList.add("lab_facilities__list__content__text-container__task");
    task.textContent = "기능 : " + facility.Task;

    infoContainer.appendChild(model);
    infoContainer.appendChild(company);
    infoContainer.appendChild(task);

    textContainer.appendChild(name);
    textContainer.appendChild(infoContainer);

    content.appendChild(imageContainer);
    content.appendChild(textContainer);

    listItem.appendChild(content);

    listContainer.appendChild(listItem);
  });
};

const sheetName = "Lab Facilities";
getExcelData(sheetName, function (data) {
  drawLabFacilities(data);
});
