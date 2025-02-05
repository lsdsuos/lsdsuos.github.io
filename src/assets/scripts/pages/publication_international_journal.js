import { getExcelData } from "../getData";

const abbreviateNames = (names, highlight) => {
  const namesArr = names.split("; ").map((name) => name.trim());

  const result = namesArr.map((name) => {
    const parts = name.split(", ");
    const firstName = parts[1].match(/[A-Z]/g);
    const lastName = parts[0];
    const abbreviatedName = `${firstName.join(". ")}. ${lastName}`;

    if (highlight === "y" && abbreviatedName === "H. Koo") {
      const highlightedName = `<u>${abbreviatedName}</u><sup>*</sup>`;
      return highlightedName;
    } else {
      return abbreviatedName;
    }
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

  const yearRanges = {
    "2026~": [],
    "2021~2025": [],
    "2010~2020": [],
  };

  // 데이터를 년도 범위에 따라 분류
  data.forEach((item) => {
    const { Year } = item;

    if (Year >= 2026) {
      yearRanges["2026~"].push(item);
    } else if (Year >= 2021) {
      yearRanges["2021~2025"].push(item);
    } else {
      yearRanges["2010~2020"].push(item);
    }
  });

  Object.entries(yearRanges).forEach(([yearRange, items]) => {
    const yearContainer = createPublicationContainer(yearRange);
    publicationContainer.appendChild(yearContainer);

    const listContainer = yearContainer.querySelector(".publication__list-container");

    // 아이템별로 리스트 생성
    items.forEach((item) => {
      let { Authors, Title, Publication, Volume, Pages, Year, Highlight, paper_URL } = item;
      Authors = abbreviateNames(Authors, Highlight);

      const listItem = document.createElement("div");
      listItem.classList.add("publication__list");

      const content = document.createElement("div");
      content.classList.add("publication__list-content");

      // const titleElement = document.createElement("h4");
      // titleElement.classList.add("title");
      // titleElement.innerHTML = `${Title}`;
      // 🔥 논문 제목 (하이퍼링크 추가, h4 유지)
      const titleElement = document.createElement("h4");
      titleElement.classList.add("title");

      if (paper_URL) {
        const linkElement = document.createElement("a");
        linkElement.href = paper_URL;
        linkElement.target = "_blank"; // 새 창에서 열기
        linkElement.rel = "noopener noreferrer"; // 보안상 추천
        linkElement.innerHTML = Title;
        linkElement.style.textDecoration = "underline"; // 기본 밑줄 추가
        linkElement.style.color = "inherit"; // 기존 h4 색상 유지
        titleElement.appendChild(linkElement);
      } else {
        titleElement.innerHTML = Title;
      }

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      descriptionElement.innerHTML = `${Authors} (${Year})<br>${Publication}, ${Volume}, ${Pages}`;

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

const sheetName = "International Journal";
getExcelData(sheetName, function (data) {
  drawPublications(data);
});

const tags = document.querySelectorAll(".tag__item");

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});
