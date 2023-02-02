// modal
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('open-modal-btn');
const close = document.getElementById('close');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// modal

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function getUserInput() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  return new Book(title, author, pages, read);
}

function addBookToLibrary(book) {
  library.push(book);
}

function createBookCard(bookObj) {
  const books = document.querySelector('.books');
  const book = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const status = document.createElement('input');

  book.classList.add('book');
  title.classList.add('title');
  author.classList.add('author');
  pages.classList.add('pages');
  status.classList.add('status');
  status.setAttribute('type', 'checkbox');

  title.textContent = bookObj.title;
  author.textContent = bookObj.author;
  pages.textContent = bookObj.pages;

  if (bookObj.read) {
    book.classList.add('on');
  }

  book.appendChild(status);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  books.appendChild(book);
}

function updateDisplay() {
  if (document.querySelector('.books').firstChild) {
    document.querySelector('.books').replaceChildren();
  }
  library.forEach((book) => {
    createBookCard(book);
  });
}

// Add book
document.querySelector('#submit').addEventListener('click', (e) => {
  console.log(e.target);
  e.preventDefault();
  const book = getUserInput();
  console.log(book);
  addBookToLibrary(book);
  console.log(library);
  updateDisplay();
});

// delete book

// change book read status
