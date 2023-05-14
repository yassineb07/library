import { saveBookList, getBookList } from './storage';

// get book list from storage
const bookList = getBookList() || [];

// create book obj
function Book(title, author, pages, read) {
  const id = Date.now().toString();
  return { id, title, author, pages, read };
}

// get user input
function getUserInput() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  return Book(title, author, pages, read);
}

// clear form fields
function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

// change read status
function changeStatus(bookObj) {
  if (bookObj.read) {
    bookObj.read = false;
  } else {
    bookObj.read = true;
  }
  saveBookList(bookList);
}

// add book
function addBook() {
  const book = getUserInput();
  bookList.push(book);
  saveBookList(bookList);
  clearForm();
}

// delete book
function deleteBook(id) {
  const bookIndex = bookList.findIndex((bookEl) => bookEl.id === id);
  bookList.splice(bookIndex, 1);
  saveBookList(bookList);
}

export { bookList, addBook, deleteBook, changeStatus };
