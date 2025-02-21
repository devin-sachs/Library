const myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages){
    // take params, create a book then store it in the array

    currentBook = new Book(title,author,pages);
    myLibrary.push(currentBook);
}

function displayLibrary(){
    myLibrary.forEach(book => {
        console.log(book)

        const card_container = document.querySelector(".card-container")
        const card = document.createElement("div");
        card.classList.add("card")
        card_container.appendChild(card);
    
        const book_details = document.createElement("div");
        book_details.classList.add("book-details");
        card.appendChild(book_details);
    
                const list = document.createElement("ul")
    
        for (let info in book){
    
            const list_item = document.createElement("li")
            list.appendChild(list_item);
            // console.log((info + ": "+ book[info]))
    
            firstLetter  = info.charAt(0);
            firstLetterCap  = firstLetter .toUpperCase();
            remainingLetters  = info.slice(1);
            capitalizedProp = firstLetterCap + remainingLetters;
    
            // console.log(capitalizedProp)
    
    
            book_text = document.createTextNode(capitalizedProp + ": " + book[info]);
            list_item.appendChild(book_text);
            book_details.appendChild(list);
        }
        
    })
}

addBookToLibrary("Fight Club", "Chuck Palahniuk", "208");
addBookToLibrary("Normal People", "Sally Rooney", "266");
addBookToLibrary("Haunting Adeline", "H.D. Carlton", "565");
addBookToLibrary("Hunting Adeline", "H.D. Carlton", "702");
addBookToLibrary("My Best Friend's Exorcism", "Grady Hendrix", "336");


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


// console.log(myLibrary);
displayLibrary()