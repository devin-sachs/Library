
const myLibrary = [];

class Book{
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus
    }

    //Book method
    addBookToLibrary(){
        // const newBook = new Book(this.title,this.author,this.ages, this.readStatus);
        myLibrary.push(this);
        this.displayLibrary(this);
    }

    displayLibrary(book){
        if (!book) return; // Avoid errors if no book is passed
    
        const card_container = document.querySelector(".card-container");
        
        const card = document.createElement("div");
        card.classList.add("card");
        card_container.appendChild(card);
    
        const book_details = document.createElement("div");
        book_details.classList.add("book-details");
        card.appendChild(book_details);
    
        for (let info in book){
            if (info == "readStatus"){
                break;
            }
    
            const bookProp = document.createElement("p")
    
            // Capitalize the property name
            let firstLetter  = info.charAt(0);
            let firstLetterCap  = firstLetter .toUpperCase();
            let remainingLetters  = info.slice(1);
            let capitalizedProp = firstLetterCap + remainingLetters;    
            
            // Create text node
            let book_text = document.createTextNode(capitalizedProp + ": " + book[info]);
            bookProp.appendChild(book_text);
            book_details.appendChild(bookProp);
    
        }
    
                //Create bottom card buttons
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-card-container");
                
                const readButton = document.createElement("button");
                readButton.classList.add("read");
                let readButtonText = document.createTextNode("Read")
                readButton.appendChild(readButtonText);
    
                if (book.readStatus != true){
                    readButton.classList.toggle("unread");
                    readButton.textContent = "Unread"
                }
        
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("delete")
                let deleteButtonText = document.createTextNode("Delete");
                deleteButton.appendChild(deleteButtonText);
        
                buttonContainer.appendChild(readButton);
                buttonContainer.appendChild(deleteButton);
        
                book_details.appendChild(buttonContainer);
    
    }

}


function processForm (){

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
        const formReadStatus = document.querySelector('#readStatus').checked;
        // console.log(formReadStatus);
        currentBook = new Book(formTitle,formAuthor,formPages, formReadStatus);
        currentBook.addBookToLibrary();
        dialog.close();
    });
}

function addDeleteButton(){
//Delete button, if pressed delete book and remove from library, matching by title. Ideally would have some kind of internal ID property if used in DB for future use. 
cardContainer = document.querySelector(".card-container")

cardContainer.addEventListener("click",(event) => {

const currentCard = event.target.closest(".card")
const bookDetails = currentCard.querySelector(".book-details");
const buttonContainer = bookDetails.querySelector(".button-card-container")

const readButton = buttonContainer.querySelector(".read")

if (event.target.matches(".delete")) {
    const bookTitleElement = bookDetails.querySelector("p")

    if (!bookTitleElement) return;

    currentBookTitle = bookTitleElement.textContent.slice(7).trim();

    const bookIndex = myLibrary.findIndex(book => book.title === currentBookTitle);

    if (bookIndex !== -1) {
        // console.log("removing book", myLibrary[bookIndex])
        myLibrary.splice(bookIndex,1)
        currentCard.remove();
        // console.log("Updated library", myLibrary);
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
    // console.log(readButton);
} 


})
}



fight_club = new Book("Fight Club", "Chuck Palahniuk", "208", true)
normal_people = new Book("Normal People", "Sally Rooney", "266", true)
haunting_adeline = new Book("Haunting Adeline", "H.D. Carlton", "565", true)
haunting_adeline = new Book("Hunting Adeline", "H.D. Carlton", "702", false)
best_friends = new Book("My Best Friend's Exorcism", "Grady Hendrix", "336", false)

fight_club.addBookToLibrary();
normal_people.addBookToLibrary();
haunting_adeline.addBookToLibrary();
haunting_adeline.addBookToLibrary();
best_friends.addBookToLibrary();


processForm();
addDeleteButton();