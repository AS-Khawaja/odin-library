const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");
const outputBox = document.querySelector("output");
const bookNameField = dialog.querySelector("#book-name");
const authorField = dialog.querySelector("#author");
const pagesField = dialog.querySelector("#pages");
const statusField=dialog.querySelector("select");


const myLibrary = [];

function Book(name,author,pages,status) {
  this.name=name;
  this.author=author;
  this.pages=pages;
  this.status=status;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addtotable(){
    const table = document.getElementById("table");
    
}


showBtn.addEventListener("click", () => {
    dialog.showModal();
});
  
jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const bookName = bookNameField.value;
    const author = authorField.value;
    const pages = pagesField.value;
    const status=statusField.value;
    const book = new Book(bookName,author,pages,status);

    addBookToLibrary(book);

    dialog.close();
    const outputMessage = `Favorite animal: ${bookName}, Type: ${author}`;
    outputBox.value = outputMessage;
    console.log(outputMessage);
});