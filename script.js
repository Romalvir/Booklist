// Book Class : represents a Book object
class Book {
	constructor(title, author, isbn){
		//assign it to the property using .this
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

//UI Class : handle UI tasks, displaying & removing

class UI {
	static displayBooks(){
		const StoredBooks = [
			{
				title: "48 Laws Of Power",
				author: "Robert Greene",
				isbn: "0140-280197"
			},
			{
				title: "Casino Royale ",
				author: "Ian Fleming",
				isbn: "161218-5436"
			},
			{
				title: "The Glass Hotel",
				author: "Emily St. John Mandel",
				isbn: "218-5161436"
			}
		];
	//variable for the loop
	const books = StoredBooks;

	//loop through all the books in this array and call method AddBookToList

	books.forEach((book) => UI.addBookToList(book));
	}

	static addBookToList(book) {
		//create the row 

		//make list DOM
		const list = document.querySelector("#book-list");
		//make an elemnts
		const row = document.createElement("tr");
		//add columns
		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;

		//append row to list

		list.appendChild(row);
	}

	//This function below deletes the parent DOM
	static deleteBook(el){
		//make sure what we click contains the class delete
		if (el.classList.contains("delete")){
			el.parentElement.parentElement.remove();
		}
	}

	//Building by scratch this will insert a DIV with a color and a message
	static showAlert(message, className){
		//create a DIV
		const div = document.createElement("div");
		//Make a class for the DIV
		div.className = `alert alert-${className}`; 
		// Add the text
		div.appendChild(document.createTextNode(message));
		//how to insert it. have to grab parent element in the container
		const container = document.querySelector(".container");
		const form = document.querySelector("#book-form");
		//insert the alert
		container.insertBefore(div, form);
		//make the inserted DIV vanish in 3 seconds
		setTimeout(() => document.querySelector(".alert").remove(), 3000);
	}


	//This method will clear all the fields after being appended to the DOM
	static clearFields(){
		document.querySelector("#title").value = "";
		document.querySelector("#author").value ="";
		document.querySelector("#isbn").value ="";
	}
}

	// Class to handles storage

	class Store {

	}

	//Event: Display Book, UI & local storage
	//As soon as DOM loads it'll load UI & displaybooks
	document.addEventListener("DOMContentLoaded", UI.displayBooks);

	//Event: Add a book, UI & local storage
	document.querySelector("#book-form").addEventListener("submit", (e)=>{
	//Prevent parameter
	e.preventDefault();
	//Get form values
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;

	//Validation Form below, also make a UI alert above in UI class

	if(title === "" || author === "" || isbn ===""){
		UI.showAlert("Please Fill in all fields", "danger");
	} else {

	//Instantiate book object
	const book = new Book(title, author, isbn);
	
	//Add book to UI
	UI.addBookToList(book);

	//add book to store
	
	//Show an alert for success message

	UI.showAlert("Book Added !", "success");

	//Clear the Field
	UI.clearFields();
	}
	
});

	//Event: To remove a book from UI & local storage
	//We need to use event propagation (select something above it)
	document.querySelector("#book-list").addEventListener("click", (e) => {
		UI.deleteBook(e.target);
		//Show alert for removing an Item
		UI.showAlert("Book Removed!", "info");
	});
