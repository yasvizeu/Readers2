let inputSelector = document.getElementById('searchQuery');
const btn = document.getElementById('searchButton');
// const resultado = document.getElementById('results');

btn.addEventListener('click', () =>{
    let searchTerm = inputSelector.value.trim(); 

    if (searchTerm === "") {
        alert("Digite um termo para buscar!");
        return;
    }


    if (searchTerm === "") {
        alert("Digite um termo para buscar!");
        return;
    }


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyD7bejBajTdA3LdWZ88dxd-M5HWKfylSXg`)
  .then(response => response.json()) 
  .then(result => {
    let books = result.items;
    let results = document.getElementById("results");
    results.innerHTML = ""

    books.forEach(book => {
        let bookItem = document.createElement("li");
        bookItem.textContent = book.volumeInfo.title; 
        results.appendChild(bookItem);
    });
})
.catch(error => console.error("Erro ao buscar os livros:", error));
})




