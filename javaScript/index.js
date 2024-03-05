const myLibrary = [];
console.log(myLibrary);

class Book {
  constructor(title, author, pages, description) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
  }
}

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
}

const contentArea = document.querySelector(".main-content");

if (contentArea.innerHTML === "") {
  contentArea.innerHTML = `
      <div>
        <div class="content">
          <div class="top book-title">Hitchhiker's Guide To The Galaxy</div>
          <div class="middle">
            <div class="top">
              <div class="author-section">
                <div>Author:</div>
                <div class="author">Douglas Adams</div>
              </div>
              <div class="page-section">
                <div>Pages:</div>
                <div class="author">3432 pages</div>
              </div>
            </div>
            <div class="bottom">
              <label for="description-box">Description</label>
              <div class="description-box">
                Arthur Dent's cosmic journey, guided by an eccentric
                hitchhiker, unravels absurdities, unveiling the ultimate
                answer—42—in this satirical space adventure.
              </div>
              <div class="read">
                <input type="checkbox" id="check" class="checked" />
                <label for="read">read</label>
              </div>
            </div>
          </div>
          <div class="bottom">
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>
  `;
}
