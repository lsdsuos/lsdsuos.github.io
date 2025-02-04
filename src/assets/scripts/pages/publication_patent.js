import { getExcelData, fetchDriveImageWithRetry } from "../getData";

const abbreviateNames = (names) => {
  const namesArr = names.split(", ");

  const result = namesArr.map((name) => {
    const parts = name.split(" ");
    const lastName = parts.pop();
    const firstName = parts.map((part) => part[0]).join(". ");

    return `${firstName}. ${lastName}`;
  });

  return result.join(", ");
};

const createPublicationContainer = (yearRange) => {
  const yearContainer = document.createElement("div");
  yearContainer.classList.add("publication__year-container");
  yearContainer.setAttribute("year-range", yearRange);

  const yearTitle = document.createElement("div");
  yearTitle.classList.add("publication__year-title");

  const yearText = document.createElement("h3");
  yearText.classList.add("title");
  yearText.textContent = yearRange;

  yearTitle.appendChild(yearText);
  yearContainer.appendChild(yearTitle);

  const listContainer = document.createElement("div");
  listContainer.classList.add("publication__list-container");
  yearContainer.appendChild(listContainer);

  return yearContainer;
};

const drawPublications = (data) => {
  const publicationContainer = document.querySelector(".publication-container");

  // const yearRanges = {
  //   "2025": [],
  //   "2024": [],
  // };

  // // 데이터를 년도 범위에 따라 분류
  // data.forEach((item) => {
  //   let { Date } = item;
  //   Date = parseInt(Date.split("-")[0]);

  //   if (Date >= 2025) {
  //     yearRanges["2025"].push(item);
  //   } else {
  //     yearRanges["2024"].push(item);
  //   }
  // });

  const yearRanges = {};
  for (let year = 2021; year <= 2030; year++) {
    yearRanges[year] = [];
  }

  // 데이터를 년도 범위에 따라 분류
  data.forEach((item) => {
    let { Date } = item;
    Date = parseInt(Date.split("-")[0]); // "YYYY-MM-DD" → YYYY 추출

    if (yearRanges.hasOwnProperty(Date)) {
      yearRanges[Date].push(item);
    }
  });

  Object.entries(yearRanges).forEach(([yearRange, items]) => {
    const yearContainer = createPublicationContainer(yearRange);
    publicationContainer.appendChild(yearContainer);

    const listContainer = yearContainer.querySelector(
      ".publication__list-container"
    );

    // 아이템별로 리스트 생성
    items.forEach((item) => {
      let { ImageID, Title, Inventors, Number, Date, Country } = item;

      const listItem = document.createElement("div");
      listItem.classList.add("publication__list");

      const imageElement = document.createElement("img");
      imageElement.classList.add("publication__list-image");
      // const imageUrl = ImageID
      //   ? `https://drive.google.com/thumbnail?id=${ImageID}`
      //   : "./images/empty.png";
      // imageElement.src = imageUrl;

      // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)
      fetchDriveImageWithRetry(imageElement, ImageID);

      const content = document.createElement("div");
      content.classList.add("publication__list-content");

      const titleElement = document.createElement("h4");
      titleElement.classList.add("title");
      titleElement.innerHTML = `${Title}`;

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      Inventors = Inventors.split("|").join(", ");
      Number = String(Number).replace(/0+$/, "");
      if (!Country) {
        Country = "대한민국";
        Number = Number.slice(0, 2) + "-" + Number.slice(2);
      } else {
        Inventors = abbreviateNames(Inventors);
      }
      descriptionElement.innerHTML = `${Inventors}<br>${Country} 특허 ${Number} (${Date})`;

      content.appendChild(titleElement);
      content.appendChild(descriptionElement);

      listItem.appendChild(imageElement);
      listItem.appendChild(content);

      listContainer.appendChild(listItem);
    });
  });
};

const changeShowTag = (event) => {
  const selectedYearTag = event.target.textContent;

  const yearRange = document.querySelectorAll(".publication__year-container");
  yearRange.forEach((container) => {
    const yearTag = container.getAttribute("year-range");

    if (yearTag === selectedYearTag || selectedYearTag === "All") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });

  const tags = document.querySelectorAll(".tag__item");
  tags.forEach((tag) => {
    tag.classList.toggle("selected", tag.textContent === selectedYearTag);
  });
};

const sheetName = "Patent";
getExcelData(sheetName, function (data) {
  drawPublications(data);
});

const tags = document.querySelectorAll(".tag__item");

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});
