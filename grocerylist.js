// Grocery List Manager

// Initialize the grocery list as an empty array of objects
let groceryList = [];

// Add items to the grocery list using objects
let item1 = {
    name: 'Apples',
    quantity: 5,
    purchased: false,
    costPerUnit: 14.5,
};
let item2 = {
    name: 'Bananas',
    quantity: 4,
    purchased: false,
    costPerUnit: 5.0,
};
let item3 = {
    name: 'Carrots',
    quantity: 4,
    purchased: false,
    costPerUnit: 6.5,
};

// Use variables to add items to the array
groceryList[0] = item1;
groceryList[1] = item2;
groceryList[2] = item3;

// View all items in the grocery list
console.log('Grocery List:');
console.log(groceryList[0]);
console.log(groceryList[1]);
console.log(groceryList[2]);

// Remove an item from the grocery list (by setting it to null)
groceryList[1] = null; // Removing Bananas

// View the updated grocery list
console.log('Updated Grocery List:');
console.log(groceryList[0]); // Should show the item object
console.log(groceryList[1]); // Should be null
console.log(groceryList[2]); // Should show the item object

// Mark an item as purchased (changing the Boolean value)
groceryList[0].purchased = true;

// Add another item to the grocery list
let item4 = {
    name: 'Oranges',
    quantity: 12,
    purchased: false,
    costPerUnit: 20.5,
};
groceryList[3] = item4;

// View the final grocery list, including the purchase status
console.log('Final Grocery List:');
console.log(groceryList[0]); // Apples, purchased: true
console.log(groceryList[1]); // null
console.log(groceryList[2]); // Carrots, purchased: false
console.log(groceryList[3]); // Oranges, purchased: false

// Add an undefined item to demonstrate its usage
groceryList[4] = undefined;

// View the list with the undefined item
console.log('Grocery List with Undefined Item:');
console.log(groceryList[0]);
console.log(groceryList[1]);
console.log(groceryList[2]);
console.log(groceryList[3]);
console.log(groceryList[4]); // Should be undefined

// Total Cost Computation
console.log('Total Cost Computation:');

// Total Cost for Apples
console.log('Total Cost of Apples: ', groceryList[0].quantity * groceryList[0].costPerUnit);

// Total Cost for Carrots
console.log('Total Cost of Carrots: ', groceryList[2].quantity * groceryList[2].costPerUnit);
