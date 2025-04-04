let inputSelector = document.getElementById('searchQuery');
const btn = document.getElementById('searchButton');
// const resultado = document.getElementById('results');

btn.addEventListener('click', () =>{
    let searchTerm = inputSelector.value.trim(); 

    if (searchTerm === "") {
        alert("Digite um título para buscar!");
        return;
    }


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyD7bejBajTdA3LdWZ88dxd-M5HWKfylSXg`)
  .then(response => response.json()) 
  .then(result => {
    let books = result.items;
    let results = document.getElementById("results");
    results.innerHTML = ""

    books.forEach(book => {
        let bookItem = document.createElement("p");
        let bookDescription = document.createElement("p");
        let bookAuthors = document.createElement("p");
        let bookImage = document.createElement("img");
        bookItem.textContent = book.volumeInfo.title;
        bookDescription.textContent = book.volumeInfo.description;
        bookAuthors.textContent = book.volumeInfo.authors;
        bookImage.src = book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail || "https://via.placeholder.com/128x192.png?text=Sem+Imagem";
        results.appendChild(bookItem);
        results.appendChild(bookDescription);
        results.appendChild(bookAuthors);
        results.appendChild(bookImage);
    });
})
.catch(error => console.error("Erro ao buscar os livros:", error));
})




