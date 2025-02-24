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
            deleteButtonText = document.createTextNode("Delete");
            deleteButton.appendChild(deleteButtonText);
    
            buttonContainer.appendChild(readButton);
            buttonContainer.appendChild(deleteButton);
    
            book_details.appendChild(buttonContainer);

}


// // Handle form submission
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book");
const submitButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

//Add Book button event listener 
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


//Delete button, if pressed delete book and remove from library, matching by title. Ideally would have some kind of internal ID property if used in DB for future use. 
cardContainer = document.querySelector(".card-container")

cardContainer.addEventListener("click",(event) => {

    const currentCard = event.target.closest(".card")
    const bookDetails = currentCard.querySelector(".book-details");
    const buttonContainer = bookDetails.querySelector(".button-card-container")

    const readButton = buttonContainer.querySelector(".read")
    const unreadButton = buttonContainer.querySelector(".unread")

    if (event.target.matches(".delete")) {
        const bookTitleElement = bookDetails.querySelector("p")

        if (!bookTitleElement) return;

        currentBookTitle = bookTitleElement.textContent.slice(7).trim();

        const bookIndex = myLibrary.findIndex(book => book.title === currentBookTitle);

        if (bookIndex !== -1) {
            console.log("removing book", myLibrary[bookIndex])
            myLibrary.splice(bookIndex,1)
            currentCard.remove();
            console.log("Updated library", myLibrary);
        }
        
    }

    else if(event.target.matches(".read")) {
        // readButton.classList.toggle(".unread");
        readButton.classList.toggle("unread");
        readButton.textContent = "Unread"


        //toggle button text based on current class

        //TO DO future improvement: 

        //create Book prototype function that toggles a book instance’s read status. Need to add a class property for read or not read
        if(readButton.classList.contains("unread")){
            readButton.textContent = "Unread"
        } else{
            readButton.textContent = "Read"
        }
        console.log(readButton);
    } 
    

})