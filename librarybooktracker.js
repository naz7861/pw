// Library Book Tracker
// Initialize empty arrays to store book titles and their statuses
let books = [];
let statuses = [];

// Prompt the user to input the number of books
let numberOfBooks = prompt("How many books do you want to track?");
numberOfBooks = Number(numberOfBooks); // Convert input to a number

// Use a for loop to collect book titles and initialize their statuses
for (let i = 0; i < numberOfBooks; i++) {
    let bookTitle = prompt("Enter the title of book " + (i + 1) + ":");
    books[i] = bookTitle;
    statuses[i] = "Available"; // All books start as available
}

// Display the initial list of books and their statuses
console.log("Library Book Tracker:");
for (let i = 0; i < numberOfBooks; i++) {
    console.log(books[i] + ": " + statuses[i]);
}

// Ask the user if they want to borrow or return a book
let action = prompt("Do you want to borrow or return a book? (borrow/return/exit)");

// Use a while loop to handle borrow/return actions until the user chooses to exit
while (action !== "exit") {
    let bookTitle = prompt("Enter the title of the book:");
    let found = false;

    // Use a for loop to find the book and update its status
    for (let i = 0; i < numberOfBooks; i++) {
        if (books[i] === bookTitle) {
            found = true;
            if (action === "borrow" && statuses[i] === "Available") {
                statuses[i] = "Borrowed";
                console.log(bookTitle + " has been borrowed.");
            } else if (action === "return" && statuses[i] === "Borrowed") {
                statuses[i] = "Available";
                console.log(bookTitle + " has been returned.");
            } else {
                console.log("Invalid action or the book is already in the desired state.");
            }
            break; // Exit the for loop once the book is found
        }
    }
    
    if (!found) {
        console.log("Book not found.");
    }

    // Display the updated list of books and their statuses
    console.log("Updated Library Book Tracker:");
    for (let i = 0; i < numberOfBooks; i++) {
        console.log(books[i] + ": " + statuses[i]);
    }

    // Ask the user if they want to perform another action or exit
    action = prompt("Do you want to borrow or return another book? (borrow/return/exit)");
}

// Using a do-while loop to print the final status of all books
let index = 0;
console.log("Final Library Book Tracker:");
do {
    console.log(books[index] + ": " + statuses[index]);
    index++;
} while (index < numberOfBooks);
