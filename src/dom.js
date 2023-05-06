import { bookList, addBook, deleteBook, changeStatus } from './book';

// modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// create book card
function createBookCard(bookObj) {
  console.log(bookObj);
  const bookEl = document.createElement('div');
  bookEl.dataset.bookId = bookObj.id;
  bookEl.classList.add('book', 'shadow-lg', 'border-2');

  const titleEl = document.createElement('div');
  // titleEl.classList.add();
  titleEl.textContent = bookObj.title;

  const authorEl = document.createElement('div');
  // authorEl.classList.add();
  authorEl.textContent = bookObj.author;

  const pagesEl = document.createElement('div');
  // pagesEl.classList.add();
  pagesEl.textContent = bookObj.pages;

  const readEl = document.createElement('button');
  readEl.id = 'readBtn';
  // readEl.classList.add();
  readEl.textContent = bookObj.read;

  const removeEl = document.createElement('div');
  removeEl.id = 'deleteBtn';
  // removeEl.classList.add();
  removeEl.innerHTML = '&times;';

  bookEl.appendChild(removeEl);
  bookEl.appendChild(titleEl);
  bookEl.appendChild(authorEl);
  bookEl.appendChild(pagesEl);
  bookEl.appendChild(readEl);

  return bookEl;
}

function renderBookList(list) {
  const bookListEl = document.getElementById('bookList');
  list.forEach((bookEl) => {
    const book = createBookCard(bookEl);
    bookListEl.appendChild(book);
  });
}

function clearBookList() {
  const bookListEl = document.getElementById('bookList');
  while (bookListEl.firstChild) {
    bookListEl.removeChild(bookListEl.firstChild);
  }
}

function render(list) {
  clearBookList();
  renderBookList(list);
}

// add event listener

// add book
const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  render(bookList);
});

// delete book
const bookListEl = document.getElementById('bookList');
bookListEl.addEventListener('click', (e) => {
  if (e.target.id === 'deleteBtn') {
    const id = e.target.parentElement.dataset.bookId;
    deleteBook(id);
    render(bookList);
  }
});

// change read status
bookListEl.addEventListener('click', (e) => {
  if (e.target.id === 'readBtn') {
    const id = e.target.parentElement.dataset.bookId;
    const bookObj = bookList.find((book) => book.id === id);
    changeStatus(bookObj);
    render(bookList);
  }
});

export default render;
