const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");
const outputBox = document.querySelector("output");
const bookNameField = dialog.querySelector("#book-name");
const authorField = dialog.querySelector("#author");
const pagesField = dialog.querySelector("#pages");
const statusField=dialog.querySelector("select");
const table = document.getElementById("table");




function Book(name,author,pages,status) {
  this.name=name;
  this.author=author;
  this.pages=pages;
  this.status=status;
}

const myLibrary = [
  new Book("Eat & Run", "Scott Jurek", 236, "Unread"),
  new Book("Can't Hurt Me", "David Goggins", 364, "Read"),
  new Book("The Kanogawa Food Detectives", "Hisashi Kishiwai", 201, "Unread"),
  new Book("I Would Meet You Anywhere", "Susan Kiyo Ito", 241, "Unread")
];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookToTable(book) {
  const row = document.createElement("tr");
  
  const nameCell = document.createElement("td");
  nameCell.textContent = book.name;
  row.appendChild(nameCell);
  
  const authorCell = document.createElement("td");
  authorCell.textContent = book.author;
  row.appendChild(authorCell);
  
  const pagesCell = document.createElement("td");
  pagesCell.textContent = book.pages;
  row.appendChild(pagesCell);
  
  const statusCell = document.createElement("td");
  statusCell.textContent = book.status;
  row.appendChild(statusCell);
  
  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.addEventListener("click", () => {
    table.removeChild(row);
  });
  deleteCell.appendChild(deleteBtn);
  row.appendChild(deleteCell);
  
  table.appendChild(row);
}

function populateTable() {
  myLibrary.forEach(book => addBookToTable(book));
}


showBtn.addEventListener("click", () => {
  bookNameField.value = '';
  authorField.value = '';
  pagesField.value = '';
  statusField.value = 'default';
    dialog.showModal();
});
  
jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const bookName = bookNameField.value;
  const author = authorField.value;
  const pages = pagesField.value;
  const status = statusField.value;

  if (bookName && author && pages && status && status !== "default") {
    const book = new Book(bookName, author, pages, status);
    addBookToLibrary(book);
    addBookToTable(book);
    dialog.close();
    bookNameField.value = '';
  authorField.value = '';
  pagesField.value = '';
  statusField.value = 'default';
  }
});

populateTable();