// Library Book Catalog

// Initialize an object to store book details
let bookCatalog = {
  '1984': { author: 'George Orwell', available: true, copies: 4 },
  'To Kill a Mockingbird': { author: 'Harper Lee', available: false, copies: 0 },
  'The Great Gatsby': { author: 'F. Scott Fitzgerald', available: true, copies: 3 },
};

// Function to display the current book catalog
function displayCatalog(catalog) {
  console.log('Current Book Catalog:');
  for (let book in catalog) {
    console.log(
      `${book} by ${catalog[book].author} - Available: ${catalog[book].available}, Copies: ${catalog[book].copies}`
    );
  }
}

// Function to add a new book to the catalog
function addBook(catalog, title, author, available, copies) {
  catalog[title] = { author: author, available: available, copies: copies };
  console.log(`${title} has been added to the catalog.`);
}

// Function to remove a book from the catalog
function removeBook(catalog, title) {
  if (title in catalog) {
    delete catalog[title];
    console.log(`${title} has been removed from the catalog.`);
  } else {
    console.log(`${title} does not exist in the catalog.`);
  }
}

// Function to check if a book exists in the catalog
function isBookInCatalog(catalog, title) {
  return title in catalog;
}

// Using computed property names to dynamically add properties
let bookTitle = 'Moby Dick';
let bookAuthor = 'Herman Melville';
bookCatalog[bookTitle] = { author: bookAuthor, available: true, copies: 2 };

// Accessing book properties
console.log('Author of 1984:', bookCatalog['1984'].author); // Using bracket notation
console.log(
  'Is The Great Gatsby available?:',
  bookCatalog['The Great Gatsby'].available
); // Using dot notation

// Adding a new method to the book catalog
bookCatalog.printAvailability = function (title) {
  if (this[title]) {
    console.log(
      `${title} is ${this[title].available ? 'available' : 'not available'}.`
    );
  } else {
    console.log(`${title} does not exist in the catalog.`);
  }
};

// Using the new method
bookCatalog.printAvailability('1984');

// Using optional chaining to safely access nested properties
console.log(
  'Copies of The Great Gatsby:',
  bookCatalog['The Great Gatsby']?.copies
);
console.log(
  'Copies of a non-existent book:',
  bookCatalog['Non Existent Book']?.copies
);

// Display the initial catalog
displayCatalog(bookCatalog);

// Add a new book
addBook(bookCatalog, 'Pride and Prejudice', 'Jane Austen', true, 5);

// Remove a book
removeBook(bookCatalog, '1984');

// Check if a book exists in the catalog
console.log('Is 1984 in the catalog?', isBookInCatalog(bookCatalog, '1984'));

// Display the updated catalog
displayCatalog(bookCatalog);

// Setting metadata for object properties
Object.defineProperty(bookCatalog['The Great Gatsby'], 'author', {
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log(
  "Metadata for 'author' of 'The Great Gatsby':",
  Object.getOwnPropertyDescriptor(bookCatalog['The Great Gatsby'], 'author')
);

// Trying to modify a non-writable property
bookCatalog['The Great Gatsby'].author = 'New Author';
console.log(
  'Author of The Great Gatsby after attempting modification:',
  bookCatalog['The Great Gatsby'].author
);
