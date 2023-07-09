const BOOK_LIST_KEY = "book.list";

const saveBookList = (list) => {
  localStorage.setItem(BOOK_LIST_KEY, JSON.stringify(list));
};

const getBookList = () => {
  const list = localStorage.getItem(BOOK_LIST_KEY);
  return JSON.parse(list);
};

export { saveBookList, getBookList };
