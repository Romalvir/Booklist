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
				isbn: "345678 9998"
			},
			{
				title: "Splinter Cell",
				author: "Tom Clancy",
				isbn: "341178 2234"
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

	//This method will clear all the fields after being appended to the DOM
	static clearFields(){
		document.querySelector("#title").value = "";
		document.querySelector("#author").value ="";
		document.querySelector("#isbn").value ="";
	}
}



// Class to handles storage

//Event: Display Book, UI & local storage
//as soon as DOM loads itll load UI & displaybooks
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a book, UI & local storage
document.querySelector("#book-form").addEventListener("submit", (e)=>{
	//prevent paramter
	e.preventDefault();
//get form values
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const isbn = document.querySelector("#isbn").value;

	//Instantiate book object
	const book = new Book(title, author, isbn);
	
	//Add book to UI
	UI.addBookToList(book);

	//Clear the Field
	UI.clearFields();

});

//Event: To remove a book from UI & local storage








