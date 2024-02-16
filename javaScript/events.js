document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: none;
    `;
});

document.querySelector(".add").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: block;
    `;
});

document.querySelector(".submit").addEventListener("click", () => {
  addBookToLibrary();
  setTimeout(() => {
    document.querySelector(".sidebar").style = `
    display: none;
    `;
  }, 2000);
});

const checkMark = document.getElementById("check");

// document.getElementById("check").addEventListener("click", () => {
//   if (checkMark.checked) {
//     document.querySelector(".main-content > div").style = `
//         background-color: var(--read-color);
//         `;
//     document.querySelector(".description-box").style = `
//       background-color: var(--description-read);
//       `;
//   } else {
//     document.querySelector(".main-content > div").style = `
//         background-color: var(--white-text);
//         `;
//     document.querySelector(".description-box").style = `
//       background-color: white;
//       `;
//   }
// });

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

// function readBook() {
//   const checkMark = document.getElementById("check");
//   if (checkMark.checked) {
//     document.querySelector(".main-content > div").style = `
//         background-color: var(--read-color);
//         `;
//     document.querySelector(".description-box").style = `
//       background-color: var(--description-read);
//       `;
//   } else {
//     document.querySelector(".main-content > div").style = `
//         background-color: var(--white-text);
//         `;
//     document.querySelector(".description-box").style = `
//       background-color: white;
//       `;
//   }
// }

document.querySelector(".main-content").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: none;
    `;
});

document.querySelector(".header").addEventListener("click", () => {
  document.querySelector(".sidebar").style = `
    display: none;
    `;
});
