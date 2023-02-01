/* modal */
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
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
/*       */
const booksTest = [
  {
    title: 'dark knight',
    author: 'batman',
    pages: 255,
    read: true,
  },
  {
    title: 'man of steel',
    author: 'superman',
    pages: 150,
    read: true,
  },
  {
    title: 'thor',
    author: 'odinson',
    pages: 74,
    read: false,
  },
];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookInfo(bookEl) {
  const books = document.querySelector('.books');

  const book = document.createElement('div');
  const read = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');

  book.classList.add('book');
  read.classList.add('read');
  title.classList.add('title');
  author.classList.add('author');
  pages.classList.add('pages');

  title.textContent = bookEl.title;
  author.textContent = bookEl.author;
  pages.textContent = bookEl.pages;

  book.appendChild(read);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);

  books.appendChild(book);
}

function displayBooks() {
  const library = booksTest;
  library.forEach((book) => addBookInfo(book));
}

/* display books on page */
document.addEventListener('DOMContentLoaded', displayBooks());
/* add  a book */
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  // prevent submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;
  // new book
  const book = new Book(title, author, pages, read);
  console.log(book);
  addBookInfo(book);
});
