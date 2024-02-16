const myLibrary = [];

function Book(title, author, pages, description, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.read = false;
}

const dummyBook = new Book(
  "Harry Potter",
  "JK Rowling",
  328,
  "This book is about a wizard boy who attended wizard school and had normal childhood drama in and out of school."
);

myLibrary.push(dummyBook);

console.log(myLibrary);

function addBookToLibrary() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const descInput = document.getElementById("description");
  const bookTitle = titleInput.value;
  const bookAuthor = authorInput.value;
  const bookPages = pagesInput.value;
  const bookDesc = descInput.value;
  const book = new Book(bookTitle, bookAuthor, bookPages, bookDesc);
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  descInput.value = "";
  myLibrary.push(book);
  renderHTML();
  // document.querySelector(".sidebar").style = `
  //   display: none;
  //   `;
}

function renderHTML() {
  let bookHTML = "";
  myLibrary.forEach((book, index) => {
    const html = `
      <div>
        <div class="content">
          <div class="top book-title">${book.title}</div>
          <div class="middle">
            <div class="top">
              <div class="author-section">
                <div>Author:</div>
                <div class="author">${book.author}</div>
              </div>
              <div class="page-section">
                <div>Pages:</div>
                <div class="author">${book.pages} pages</div>
              </div>
            </div>
            <div class="bottom">
              <label for="description-box">Description</label>
              <div class="description-box">${book.description}</div>
              <div class="read">
                <input type="checkbox" id="check" class="checked" />
                <label for="read">read</label>
              </div>
            </div>
          </div>
          <div class="bottom">
            <button onclick="
            myLibrary.splice(${index}, 1);
            renderHTML();
            " class="delete">Delete</button>
          </div>
        </div>
      </div>
    `;
    bookHTML += html;
  });
  document.querySelector(".main-content").innerHTML = bookHTML;
};