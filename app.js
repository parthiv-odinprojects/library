const books = [];
const nam = document.getElementById("name");
const author = document.getElementById("author");
const price = document.getElementById("price");
const main = document.getElementById("main");
function addbook(){
    const title = nam.value;
    const auth = author.value;
    const pri = price.value;
    const book = {
        title,
        auth,
        pri
    }
    books.push(book);
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
    displayBooks();
    event.preventDefault();
}

function displayBooks() {
    let bookList = "";
    books.forEach((book) => {
        bookList += `<div>Book: ${book.title}, Author: ${book.auth}, Price: ${book.pri}</div>`;
    });
    main.innerHTML = bookList;
}