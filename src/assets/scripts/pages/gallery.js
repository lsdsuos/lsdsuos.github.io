import { getExcelData, fetchDriveImageWithRetry } from "../getData";
const sheetName = "Gallery";

const params = new URLSearchParams(window.location.search);
const galleryId = params.get("title");
const galleryContainer = document.querySelector(".gallery__list-container");
const boardContainer = document.querySelector(".board__list-container");

const drawGallerys = (gallery) => {
  let { ImageID, Title, Date } = gallery;
  ImageID = ImageID.split(",");

  const galleryList = document.createElement("a");
  galleryList.classList.add("gallery__list");
  const titleLink = Title.replace(/\s+/g, "-");
  galleryList.href = `./gallery?title=${titleLink}`;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("gallery__list__image");
  const image = document.createElement("img");
  // image.src = ImageID[0]
  //   ? `https://drive.google.com/thumbnail?id=${ImageID[0]}&sz=w1048`
  //   : "./images/empty.png";

  // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)
  fetchDriveImageWithRetry(image, ImageID[0]);

  image.alt = Title;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("gallery__list__info");
  const title = document.createElement("div");
  title.classList.add("gallery__list__title");
  title.textContent = Title;
  const date = document.createElement("div");
  date.classList.add("gallery__list__date");
  date.textContent = Date;

  infoContainer.appendChild(title);
  infoContainer.appendChild(date);

  imageContainer.appendChild(image);

  galleryList.appendChild(imageContainer);
  galleryList.appendChild(infoContainer);

  galleryContainer.appendChild(galleryList);
};

const drawGalleryDetail = (gallery) => {
  let { ImageID, Title, Text, Date } = gallery;
  ImageID = ImageID.split(",");

  const boardTitle = document.createElement("h2");
  boardTitle.classList.add("board__list__title");
  boardTitle.classList.add("font-bold");
  boardTitle.textContent = Title;

  const boardDate = document.createElement("div");
  boardDate.classList.add("board__list__date");
  boardDate.textContent = Date;

  const boardContents = document.createElement("div");
  boardContents.classList.add("board__list__contents");
  ImageID.forEach((imageID, index) => {
    const image = document.createElement("img");
    image.src = imageID
      ? `https://drive.google.com/thumbnail?id=${imageID}&sz=w1048`
      : "./images/empty.png";
    image.alt = `${Title} ${index + 1}`;
    boardContents.appendChild(image);
  });
  const contents = document.createElement("p");
  contents.innerHTML = Text;
  boardContents.appendChild(contents);

  boardContainer.appendChild(boardTitle);
  boardContainer.appendChild(boardDate);
  boardContainer.appendChild(boardContents);
};

getExcelData(sheetName, (gallerys) => {
  // 갤러리
  if (galleryId) {
    boardContainer.style.display = "block";
    galleryContainer.style.display = "none";

    const result = gallerys.find(
      (gallery) => gallery.Title.replace(/\s+/g, "-") === galleryId
    );
    drawGalleryDetail(result);
  }
  // 갤러리 리스트
  else {
    gallerys.forEach((gallery) => {
      drawGallerys(gallery);
    });
  }
});
