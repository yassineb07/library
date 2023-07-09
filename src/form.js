// get user input
const getUserInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  return { title, author, pages, read };
};

// clear form fields
const resetForm = () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  title.value = "";
  author.value = "";
  pages.value = "";
  document.getElementById("read").checked = false;

  title.classList.remove("border-green-500");
  author.classList.remove("border-green-500");
  pages.classList.remove("border-green-500");
};

// form validation
const formEl = document.getElementById("bookForm");

const checkInput = (targetEl) => {
  if (targetEl.checkValidity()) {
    targetEl.classList.add("border-green-500", "text-black");
    targetEl.classList.remove("border-pink-500", "text-pink-600");
  } else {
    targetEl.classList.add("border-pink-500", "text-pink-600");
    targetEl.classList.remove("border-green-500", "text-black");
  }
};

formEl.addEventListener("input", (e) => {
  checkInput(e.target);
});

export { getUserInput, resetForm };
