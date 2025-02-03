// Description: Main javascript file for the project

// Hover Events: 헤더바 서브 메뉴 표시 이벤트
let activeSubMenu = null;

const navbarListItems = document.querySelectorAll(".navbar__item");

navbarListItems.forEach((item) => {
  const subMenuContainer = item.querySelector(".navbar__sub-menu-container");
  if (!subMenuContainer) return;
  item.addEventListener("mouseenter", () => {
    if (activeSubMenu) {
      activeSubMenu.classList.remove("active");
      activeSubMenu = null;
    }
    subMenuContainer.classList.add("active");
    activeSubMenu = subMenuContainer;
  });
  item.addEventListener("mouseleave", () => {
    subMenuContainer.classList.remove("active");
    activeSubMenu = null;
  });
});

// Mobile Events: 모바일 메뉴 표시 이벤트
const navbarOpenMenuBtn = document.querySelector(".navbar__menu-icon--bars");
const navbarMenu = document.querySelector(".navbar__mobile-menu");
const blackBg = document.querySelector(".black-bg");

navbarOpenMenuBtn.addEventListener("click", () => {
  const navbarCloseMenuBtn = document.querySelector(".navbar__mobile-menu-close-icon");
  navbarMenu.classList.add("active");
  blackBg.classList.add("active");
  document.body.style.overflow = "hidden";
  navbarCloseMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
    blackBg.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Scroll Events: 상단 메뉴바 스크롤 이벤트
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarList = navbar.querySelector(".navbar__list");
  const navbarLogoSubText = navbar.querySelector(".navbar__logo-text--sub");
  const navbarLogo = navbar.querySelector(".navbar__logo");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    navbarList.classList.add("scrolled");
    navbarLogoSubText.classList.add("scrolled");
    navbarLogo.src = "./images/logo(black).png";
  } else {
    navbar.classList.remove("scrolled");
    navbarList.classList.remove("scrolled");
    navbarLogoSubText.classList.remove("scrolled");
    navbarLogo.src = "./images/logo(white).png";
  }
});

// Window Resize Events: 가로 크기에 따라 font-size 조절
window.addEventListener("resize", function () {
  // 가로 크기에 따라 font-size 조절
  var windowWidth = window.innerWidth;
  if (windowWidth >= 1440) {
    document.body.style.fontSize = "18px"; // 가로 크기가 1440px 이상일 때
  } else if (windowWidth >= 1024) {
    document.body.style.fontSize = "16px"; // 가로 크기가 1024px 이상일 때
  } else if (windowWidth >= 768) {
    document.body.style.fontSize = "14px"; // 가로 크기가 768px 이상일 때
  } else {
    document.body.style.fontSize = "12px"; // 가로 크기가 767px 이하일 때
  }
});

// 초기 로드 시에도 font-size 설정 적용
window.dispatchEvent(new Event("resize"));
