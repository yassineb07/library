const BOOK_LIST_KEY = 'book.list';

function saveBookList(list) {
  localStorage.setItem(BOOK_LIST_KEY, JSON.stringify(list));
}

function getBookList() {
  const list = localStorage.getItem(BOOK_LIST_KEY);
  return JSON.parse(list);
}

export { saveBookList, getBookList };
