document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: none;
    `;
  document.querySelector(".header").style = `
    filter: none;
  `;
  document.querySelector(".main-content").style = `
    filter: none;
  `;
});

document.querySelector(".add").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: initial;
    `;
  document.querySelector(".header").style = `
    filter: blur(3px);
  `;
  document.querySelector(".main-content").style = `
    filter: blur(3px);
  `;
});

const checkMark = document.getElementById("check");

const readBox = document.querySelector(".checked");

document.querySelectorAll(".checked").forEach((value) => {
  value.addEventListener("click", () => {
    if (checkMark.checked) {
      document.querySelector(".main-content > div").style = `
        background-color: var(--read-color);
        `;
      document.querySelector(".description-box").style = `
      background-color: var(--description-read);
      `;
    } else {
      document.querySelector(".main-content > div").style = `
        background-color: var(--white-text);
        `;
      document.querySelector(".description-box").style = `
      background-color: white;
      `;
    }
  });
});

document.querySelector(".main-content").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: none;
    `;
  document.querySelector(".header").style = `
    filter: none;
  `;
  document.querySelector(".main-content").style = `
    filter: none;
  `;
});

document.querySelector(".header").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: none;
    `;
  document.querySelector(".header").style = `
    filter: none;
  `;
  document.querySelector(".main-content").style = `
    filter: none;
  `;
});

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  document.querySelector(".sidebar").style = `
      display: none;
      `;
  document.querySelector(".header").style = `
      filter: none;
    `;
  document.querySelector(".main-content").style = `
      filter: none;
    `;
  document.querySelector("aside").style = `
    display: none;
  `;
});

document.querySelector(".add-book").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: initial;
    `;
  document.querySelector(".header").style = `
    filter: blur(3px);
  `;
  document.querySelector(".main-content").style = `
    filter: blur(3px);
  `;
  document.querySelector("aside").style = `
    display: none;
  `;
});

const phoneSideBar = document.querySelector("aside");
document.querySelector(".fa-bars").addEventListener("click", () => {
  phoneSideBar.style.display = "flex";
});

document.querySelector(".close-button").addEventListener("click", () => {
  phoneSideBar.style.display = "none";
});
