const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
.then(response => response.json()) 
.then(book => {
  document.title = book.volumeInfo.title;
  let result = document.getElementById("result");

  function renderBook(book){
    let bookItem = document.createElement("div");
    // bookItem.classList.add("bookCard");

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

    bookItem.appendChild(bookImage);
    bookItem.appendChild(title);
    bookItem.appendChild(bookAuthors);
    bookItem.appendChild(bookDescription);
    
    result.appendChild(bookItem);
  }

  renderBook(book);
});




