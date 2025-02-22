const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages){
    const newBook = new Book(title,author,pages);
    myLibrary.push(newBook);
    displayLibrary(newBook);
}

function displayLibrary(book){
    if (!book) return; // Avoid errors if no book is passed

    const card_container = document.querySelector(".card-container");
    
    const card = document.createElement("div");
    card.classList.add("card");
    card_container.appendChild(card);

    const book_details = document.createElement("div");
    book_details.classList.add("book-details");
    card.appendChild(book_details);

    // const list = document.createElement("ul");

    for (let info in book){

        const bookProp = document.createElement("p")


        // Capitalize the property name
        firstLetter  = info.charAt(0);
        firstLetterCap  = firstLetter .toUpperCase();
        remainingLetters  = info.slice(1);
        capitalizedProp = firstLetterCap + remainingLetters;    
        
        // Create text node
        book_text = document.createTextNode(capitalizedProp + ": " + book[info]);
        bookProp.appendChild(book_text);
        book_details.appendChild(bookProp);

    }

            //Create bottom card buttons
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-card-container");
            
            const readButton = document.createElement("button");
            readButton.classList.add("read");
            readButtonText = document.createTextNode("Read")
            readButton.appendChild(readButtonText);
    
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete")
            deleteButtonText = document.createTextNode("Remove Book");
            deleteButton.appendChild(deleteButtonText);
    
            buttonContainer.appendChild(readButton);
            buttonContainer.appendChild(deleteButton);
    
            book_details.appendChild(buttonContainer);

    // book_details.
}


// // Handle form submission
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book");
const submitButton = document.querySelector("dialog button");
const formInputs = []

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formTitle = document.querySelector("#title").value;
    const formAuthor = document.querySelector("#author").value;
    const formPages = document.querySelector("#pages").value;
    addBookToLibrary(formTitle,formAuthor,formPages);
    dialog.close();
});


addBookToLibrary("Fight Club", "Chuck Palahniuk", "208");
addBookToLibrary("Normal People", "Sally Rooney", "266");
addBookToLibrary("Haunting Adeline", "H.D. Carlton", "565");
addBookToLibrary("Hunting Adeline", "H.D. Carlton", "702");
addBookToLibrary("My Best Friend's Exorcism", "Grady Hendrix", "336");