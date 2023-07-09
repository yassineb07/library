import { bookList, addBook, deleteBook, changeStatus } from "./book";

// modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// create book card
const createBookCard = (bookObj) => {
  // book
  const bookEl = document.createElement("div");
  bookEl.dataset.bookId = bookObj.id;
  bookEl.classList.add(
    "font-roboto",
    "border-2",
    "rounded-lg",
    "shadow-xl",
    "grid",
    "justify-items-end",
    "gap-y-2",
    "p-3",
    "text-lg"
  );

  // title
  const titleEl = document.createElement("div");
  titleEl.classList.add(
    "text-5xl",
    "font-bold",
    "tracking-wide",
    "justify-self-center"
  );
  titleEl.textContent = bookObj.title.toUpperCase();

  // author
  const authorEl = document.createElement("div");
  authorEl.classList.add();
  authorEl.textContent = `by ${bookObj.author}`;

  // pages
  const pagesEl = document.createElement("div");
  pagesEl.classList.add();
  pagesEl.textContent = `${bookObj.pages} pages`;

  // read element
  const readEl = document.createElement("div");
  readEl.id = "readBtn";

  const switchEl = document.createElement("label");
  switchEl.classList.add(
    "relative",
    "inline-flex",
    "items-center",
    "cursor-pointer"
  );

  const switchInput = document.createElement("input");
  switchInput.id = "switchEl";
  switchInput.setAttribute("type", "checkbox");
  if (bookObj.read) {
    switchInput.checked = true;
    bookEl.classList.add(
      "border-teal-600",
      "bg-gradient-to-r",
      "from-teal-400",
      "to-teal-50"
    );
  } else {
    switchInput.checked = false;
    bookEl.classList.add(
      "border-gray-600",
      "bg-gradient-to-r",
      "from-gray-500",
      "to-gray-200"
    );
  }
  switchInput.classList.add("sr-only", "peer");

  const switchDiv = document.createElement("div");
  switchDiv.id = "switchEl";
  switchDiv.classList.add(
    "w-11",
    "h-6",
    "bg-gray-200",
    "rounded-full",
    "peer",
    "dark:bg-gray-700",
    "peer-focus:ring-4",
    "peer-focus:ring-teal-300",
    "dark:peer-focus:ring-teal-800",
    "peer-checked:after:translate-x-full",
    "peer-checked:after:border-white",
    "after:content-['']",
    "after:absolute",
    "after:top-0.5",
    "after:left-[2px]",
    "after:bg-white",
    "after:border-gray-300",
    "after:border",
    "after:rounded-full",
    "after:h-5",
    "after:w-5",
    "after:transition-all",
    "dark:border-gray-600",
    "peer-checked:bg-teal-600"
  );
  switchEl.appendChild(switchInput);
  switchEl.appendChild(switchDiv);

  const removeEl = document.createElement("div");
  removeEl.id = "deleteBtn";
  removeEl.classList.add("text-2xl", "text-bold");
  removeEl.innerHTML = "&times;";

  const controlEl = document.createElement("div");
  controlEl.id = "bookControls";
  controlEl.classList.add(
    "justify-self-stretch",
    "flex",
    "justify-between",
    "items-center",
    "mb-4"
  );

  readEl.appendChild(switchEl);

  controlEl.appendChild(removeEl);
  controlEl.appendChild(readEl);

  bookEl.appendChild(controlEl);
  bookEl.appendChild(titleEl);
  bookEl.appendChild(authorEl);
  bookEl.appendChild(pagesEl);

  return bookEl;
};

const renderBookList = (list) => {
  const bookListEl = document.getElementById("bookList");
  list.forEach((bookEl) => {
    const book = createBookCard(bookEl);
    bookListEl.appendChild(book);
  });
};

const clearBookList = () => {
  const bookListEl = document.getElementById("bookList");
  while (bookListEl.firstChild) {
    bookListEl.removeChild(bookListEl.firstChild);
  }
};

const render = (list) => {
  clearBookList();
  renderBookList(list);
};

// add event listener

// add book
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  render(bookList);
});

// delete book
const bookListEl = document.getElementById("bookList");
bookListEl.addEventListener("click", (e) => {
  if (e.target.id === "deleteBtn") {
    const id = e.target.parentElement.parentElement.dataset.bookId;
    deleteBook(id);
    render(bookList);
  }
});

// change read status
bookListEl.addEventListener("click", (e) => {
  if (e.target.id === "switchEl") {
    const element =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const id = element.dataset.bookId;
    const bookObj = bookList.find((book) => book.id === id);
    changeStatus(bookObj);
    render(bookList);
  }
});

export default render;
