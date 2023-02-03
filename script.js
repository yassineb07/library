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

Book.prototype.switchStatus = function () {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
};

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

function removeBookFromLibrary(index) {
  library.splice(+index, 1);
}

function createBookCard(bookObj, index) {
  const books = document.querySelector('.books');
  const book = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const status = document.createElement('button');
  const remove = document.createElement('div');

  book.classList.add('book');
  book.setAttribute('data-index', `${index}`);
  title.classList.add('title');
  author.classList.add('author');
  pages.classList.add('pages');
  status.classList.add('status-btn');
  remove.classList.add('delete-btn');

  title.textContent = bookObj.title;
  author.textContent = bookObj.author;
  pages.textContent = bookObj.pages;
  remove.innerHTML = '&times;';
  status.textContent = 'Not Read';

  if (bookObj.read) {
    book.classList.add('on');
    status.classList.add('green');
    status.textContent = 'Read';
  }
  book.appendChild(remove);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(status);
  books.appendChild(book);
}

function updateDisplay() {
  if (document.querySelector('.books').firstChild) {
    document.querySelector('.books').replaceChildren();
  }
  library.forEach((book) => {
    createBookCard(book, library.indexOf(book));
  });
}

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').checked = false;
}

function deleteBook(target) {
  if (target.classList.contains('delete-btn')) {
    removeBookFromLibrary(target.parentElement.getAttribute('data-index'));
  }
}

function changeStatus(target) {
  if (target.classList.contains('status-btn')) {
    const index = target.parentElement.getAttribute('data-index');
    library[+index].switchStatus();
  }
}

// Add book
document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const book = getUserInput();
  addBookToLibrary(book);
  updateDisplay();
  clearFields();
});

// delete book
document.querySelector('.books').addEventListener('click', (e) => {
  deleteBook(e.target);
  updateDisplay();
});

// change book read status
document.querySelector('.books').addEventListener('click', (e) => {
  changeStatus(e.target);
  updateDisplay();
});
