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
    console.log(books);
    
    event.preventDefault();
}