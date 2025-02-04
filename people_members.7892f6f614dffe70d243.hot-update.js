"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelsds_web"]("people_members",{

/***/ "./src/assets/scripts/pages/members.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/pages/members.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\r\n\r\nconst drawMembers = (members) => {\r\n  const listContainer = document.querySelector(\".members__list-container\");\r\n\r\n  members.forEach((member) => {\r\n    if (member.Tag === \"Alumni\") return;\r\n    const listItem = document.createElement(\"div\");\r\n    listItem.classList.add(\"members__list\");\r\n    listItem.setAttribute(\"rank-tag\", member.Tag);\r\n\r\n    const content = document.createElement(\"div\");\r\n    content.classList.add(\"members__list__content\");\r\n\r\n    const imageContainer = document.createElement(\"div\");\r\n    imageContainer.classList.add(\"members__list__content__image-container\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"members__list__content__image\");\r\n    // const imageUrl = member.ImageID\r\n    //   ? `https://drive.google.com/thumbnail?id=${member.ImageID}`\r\n    //   : \"./images/empty.png\";\r\n    // image.src = imageUrl;\r\n\r\n    // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__.fetchDriveImageWithRetry)(image, member.ImageID);\r\n    image.alt = member.Name;\r\n\r\n    imageContainer.appendChild(image);\r\n\r\n    const textContainer = document.createElement(\"div\");\r\n    textContainer.classList.add(\"members__list__content__text-container\");\r\n\r\n    const rank = document.createElement(\"div\");\r\n    rank.classList.add(\"members__list__content__text-container__rank\");\r\n    rank.classList.add(\"font-bold\");\r\n    rank.textContent = member.Rank;\r\n\r\n    const name = document.createElement(\"div\");\r\n    name.classList.add(\"members__list__content__text-container__name\");\r\n    name.classList.add(\"font-bold\");\r\n    name.textContent = member.Name;\r\n\r\n    const topicContainer = document.createElement(\"div\");\r\n    topicContainer.classList.add(\r\n      \"members__list__content__text-container__topic-container\"\r\n    );\r\n\r\n    const researchSubject = document.createElement(\"p\");\r\n    researchSubject.textContent = \"Research Subject\";\r\n\r\n    const researchSubjectDetail = document.createElement(\"span\");\r\n    researchSubjectDetail.textContent = member[\"Research Subject\"];\r\n\r\n    topicContainer.appendChild(researchSubject);\r\n    topicContainer.appendChild(researchSubjectDetail);\r\n\r\n    const contactContainer = document.createElement(\"div\");\r\n    contactContainer.classList.add(\r\n      \"members__list__content__text-container__contact-container\"\r\n    );\r\n\r\n    const email = document.createElement(\"div\");\r\n    email.classList.add(\"members__list__content__text-container__email\");\r\n\r\n    const emailIcon = document.createElement(\"i\");\r\n    emailIcon.classList.add(\"fa-solid\");\r\n    emailIcon.classList.add(\"fa-envelope\");\r\n\r\n    const emailAddr = document.createElement(\"span\");\r\n    emailAddr.textContent = member.Email;\r\n\r\n    email.appendChild(emailIcon);\r\n    email.appendChild(emailAddr);\r\n\r\n    contactContainer.appendChild(email);\r\n\r\n    textContainer.appendChild(rank);\r\n    textContainer.appendChild(name);\r\n    textContainer.appendChild(topicContainer);\r\n    textContainer.appendChild(contactContainer);\r\n\r\n    content.appendChild(imageContainer);\r\n    content.appendChild(textContainer);\r\n\r\n    listItem.appendChild(content);\r\n\r\n    listContainer.appendChild(listItem);\r\n  });\r\n};\r\n\r\nconst changeShowTag = (event) => {\r\n  const rankTag = event.target.textContent;\r\n\r\n  const members = document.querySelectorAll(\".members__list\");\r\n  members.forEach((member) => {\r\n    const memberRankTag = member.getAttribute(\"rank-tag\");\r\n\r\n    if (memberRankTag === rankTag || rankTag === \"All\") {\r\n      member.style.display = \"block\";\r\n    } else {\r\n      member.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  const tags = document.querySelectorAll(\".tag__item\");\r\n  tags.forEach((tag) => {\r\n    tag.classList.toggle(\"selected\", tag.textContent === rankTag);\r\n  });\r\n};\r\n\r\nconst sheetName = \"Members\";\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\r\n  drawMembers(data);\r\n});\r\n\r\nconst tags = document.querySelectorAll(\".tag__item\");\r\n\r\ntags.forEach((tag) => {\r\n  tag.addEventListener(\"click\", changeShowTag);\r\n});\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/pages/members.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7adab9e7af2bbc4730b2")
/******/ })();
/******/ 
/******/ }
);