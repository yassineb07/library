import { saveBookList, getBookList } from "./storage";
import { getUserInput, resetForm } from "./form";

// get book list from storage
const bookList = getBookList() || [];

// create book obj
function Book(title, author, pages, read) {
  const id = Date.now().toString();
  return { id, title, author, pages, read };
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
  const formInput = getUserInput();
  const book = Book(
    formInput.title,
    formInput.author,
    formInput.pages,
    formInput.read
  );
  bookList.push(book);
  saveBookList(bookList);
  resetForm();
}

// delete book
function deleteBook(id) {
  const bookIndex = bookList.findIndex((bookEl) => bookEl.id === id);
  bookList.splice(bookIndex, 1);
  saveBookList(bookList);
}

export { bookList, addBook, deleteBook, changeStatus };
