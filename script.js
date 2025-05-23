let inputSelector = document.getElementById('searchQuery');
const btn = document.getElementById('searchButton');
// const resultado = document.getElementById('results');

btn.addEventListener('click', () =>{
    let searchTerm = inputSelector.value.trim(); 

    if (searchTerm === "") {
        alert("Digite um título para buscar!");
        return;
    }


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyD7bejBajTdA3LdWZ88dxd-M5HWKfylSXg&maxResults=40`)
  .then(response => response.json()) 
  .then(result => {
    let books = result.items;
    let results = document.getElementById("results");
    results.innerHTML = ""

    function renderBooks(book){
        let bookItem = document.createElement("div");
        bookItem.classList.add("bookCard");
    
        let bookImage = document.createElement("img");
        bookImage.src = book.volumeInfo.imageLinks?.thumbnail || 
                        book.volumeInfo.imageLinks?.smallThumbnail || "https://via.placeholder.com/128x192.png?text=Sem+Imagem";

        let title = document.createElement("h3");
        title.textContent = book.volumeInfo.title;
    
        let bookAuthors = document.createElement("div");
        bookAuthors.classList.add("authors");
        bookAuthors.textContent = book.volumeInfo.authors?.join(", ") || "Autor desconhecido";
    
        let bookDescription = document.createElement("div");
        bookDescription.classList.add("description");
        bookDescription.textContent = book.volumeInfo.description || "Sem descrição.";

        bookItem.addEventListener('click', () => bookClick(book.id));
   
        bookItem.appendChild(bookImage);
        bookItem.appendChild(title);
        bookItem.appendChild(bookAuthors);
        bookItem.appendChild(bookDescription);
    
     
        return bookItem;

    }

    
    function bookClick (bookId){
        window.location.href = `bookinfo.html?id=${bookId}`;
    }


    books.forEach(book => {
        results.appendChild(renderBooks(book));
    });
})
.catch(error => console.error("Erro ao buscar os livros:", error));
})






//  hoisting
// uma div no html para receber os dados dos livros
// criar uma fução para renderizar esse método de acordo
//   let bookItem = document.createElement("p");
// let bookDescription = document.createElement("p");
// let bookAuthors = document.createElement("p");
// let bookImage = document.createElement("img");
   
