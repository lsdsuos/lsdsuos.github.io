const changeShowTag = (event) => {
  const targetTag = event.target.textContent;

  researchListContainers.forEach((container) => {
    const containerResearchTag = container.getAttribute("research-tag");
    container.style.display = containerResearchTag === targetTag ? "block" : "none";
  });

  tags.forEach((tag) => {
    tag.classList.toggle("selected", tag.textContent === targetTag);
  });
};

const researchListContainers = Array.from(document.querySelectorAll(".research__list-container"));
const tags = Array.from(document.querySelectorAll(".tag__item"));

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});

// 첫 번째 research만 보이도록 설정
researchListContainers.forEach((container) => {
  const containerResearchTag = container.getAttribute("research-tag");
  container.style.display = containerResearchTag === "Research 1" ? "block" : "none";
});
