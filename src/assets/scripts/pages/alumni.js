import { getExcelData, fetchDriveImageWithRetry } from "../getData";

const drawMembers = async (members) => {
  const listContainer = document.querySelector(".members__list-container");

  members.forEach(async (member) => {
    if (member.Tag !== "Alumni") return;
    const listItem = document.createElement("div");
    listItem.classList.add("members__list");

    const content = document.createElement("div");
    content.classList.add("members__list__content");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("members__list__content__image-container");

    const image = document.createElement("img");
    image.classList.add("members__list__content__image");
    // const imageUrl = member.ImageID
    //   ? `https://drive.google.com/thumbnail?id=${member.ImageID}`
    //   : "./images/empty.png";
    // image.src = imageUrl;
    
    // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)
    fetchDriveImageWithRetry(image, member.ImageID);
    image.alt = member.Name;

    imageContainer.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add("members__list__content__text-container");

    const rank = document.createElement("div");
    rank.classList.add("members__list__content__text-container__rank");
    rank.classList.add("font-bold");
    rank.textContent = member.Rank;

    const name = document.createElement("div");
    name.classList.add("members__list__content__text-container__name");
    name.classList.add("font-bold");
    name.textContent = member.Name;

    const topicContainer = document.createElement("div");
    topicContainer.classList.add(
      "members__list__content__text-container__topic-container"
    );
    if (member["Research Subject"] !== "") {
      const researchSubject = document.createElement("p");
      researchSubject.textContent = "Research Subject";

      const researchSubjectDetail = document.createElement("span");
      researchSubjectDetail.textContent = member["Research Subject"];

      topicContainer.appendChild(researchSubject);
      topicContainer.appendChild(researchSubjectDetail);
    }

    if (member["Current Affiliation"] !== "") {
      const affiliation = document.createElement("p");
      affiliation.textContent = "Current Affiliation";

      const affiliationDetail = document.createElement("span");
      affiliationDetail.textContent = member["Current Affiliation"];

      topicContainer.appendChild(affiliation);
      topicContainer.appendChild(affiliationDetail);
    }

    const contactContainer = document.createElement("div");
    contactContainer.classList.add(
      "members__list__content__text-container__contact-container"
    );

    const email = document.createElement("div");
    email.classList.add("members__list__content__text-container__email");

    const emailIcon = document.createElement("i");
    emailIcon.classList.add("fa-solid");
    emailIcon.classList.add("fa-envelope");

    const emailAddr = document.createElement("span");
    emailAddr.textContent = member.Email;

    email.appendChild(emailIcon);
    email.appendChild(emailAddr);

    contactContainer.appendChild(email);

    textContainer.appendChild(rank);
    textContainer.appendChild(name);
    textContainer.appendChild(topicContainer);
    textContainer.appendChild(contactContainer);

    content.appendChild(imageContainer);
    content.appendChild(textContainer);

    listItem.appendChild(content);

    listContainer.appendChild(listItem);
  });
};

const sheetName = "Members";
getExcelData(sheetName, function (data) {
  drawMembers(data);
});
