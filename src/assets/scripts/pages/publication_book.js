import { getExcelData } from "../getData";

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
  //   "2020~": [],
  // };

  // // 데이터를 년도 범위에 따라 분류
  // data.forEach((item) => {
  //   const { Year } = item;

  //   if (Year >= 2020) {
  //     yearRanges["2020~"].push(item);
  //   }
  // });

  ////
  const yearRanges = {};
  for (let year = 2021; year <= 2030; year++) {
    yearRanges[year] = [];
  }


  // 데이터를 년도 범위에 따라 분류
  data.forEach((item) => {
    let { Year } = item;
    Year = parseInt(Year); // YYYY

    if (yearRanges.hasOwnProperty(Year)) {
      yearRanges[Year].push(item);
    }
  });
  //
  

  Object.entries(yearRanges).forEach(([yearRange, items]) => {
    const yearContainer = createPublicationContainer(yearRange);
    publicationContainer.appendChild(yearContainer);

    const listContainer = yearContainer.querySelector(".publication__list-container");

    // 아이템별로 리스트 생성
    const length = items.length;
    items.forEach((item, index) => {
      const { Title, Publication, Authors, Year } = item;

      const listItem = document.createElement("div");
      listItem.classList.add("publication__list");

      const content = document.createElement("div");
      content.classList.add("publication__list-content");

      const titleElement = document.createElement("h4");
      titleElement.classList.add("title");
      titleElement.innerHTML = `${Title}`;

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      descriptionElement.innerHTML = `${Authors} 공역. ${Publication}, ${Year}.`;

      content.appendChild(titleElement);
      content.appendChild(descriptionElement);

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

const sheetName = "Book";
getExcelData(sheetName, function (data) {
  drawPublications(data);
});

const tags = document.querySelectorAll(".tag__item");

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});
