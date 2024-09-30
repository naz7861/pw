// Initialize an inventory array with some stationery items
let inventory = ['Pen', 'Notebook', 'Eraser', 'Marker', 'Stapler'];

// Function to display the current inventory
function displayInventory(items) {
  console.log('Current Inventory:');
  if (items.length === 0) {
    console.log('The inventory is empty.');
  } else {
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

// Function to add items to the inventory
function addItem(items, newItem) {
  items.push(newItem);
  console.log(`${newItem} has been added to the inventory.`);
}

// Function to remove the last item from the inventory
function removeLastItem(items) {
  if (items.length > 0) {
    const removedItem = items.pop();
    console.log(`${removedItem} has been removed from the inventory.`);
  } else {
    console.log('The inventory is already empty.');
  }
}

// Function to remove the first item from the inventory
function removeFirstItem(items) {
  if (items.length > 0) {
    const removedItem = items.shift();
    console.log(`${removedItem} has been removed from the inventory.`);
  } else {
    console.log('The inventory is already empty.');
  }
}

// Function to add items to the beginning of the inventory
function addItemToBeginning(items, newItem) {
  items.unshift(newItem);
  console.log(`${newItem} has been added to the beginning of the inventory.`);
}

// Function to reverse the inventory order
function reverseInventory(items) {
  items.reverse();
  console.log('Inventory has been reversed.');
}

// Function to join all inventory items into a string
function joinInventory(items, separator = ', ') {
  const inventoryString = items.join(separator);
  console.log('Inventory joined into a string:', inventoryString);
  return inventoryString;
}

// Function to convert inventory to a string
function inventoryToString(items) {
  console.log('Inventory as a string:', items.toString());
  return items.toString();
}

// Function to remove an item from the inventory by index
function removeItem(items, index) {
  if (index >= 0 && index < items.length) {
    const removedItem = items.splice(index, 1)[0];
    console.log(`${removedItem} at index ${index} has been removed.`);
  } else {
    console.log('Invalid index. No item removed.');
  }
}

// Function to search for an item in the inventory
function searchItem(items, item) {
  const index = items.indexOf(item);
  if (index !== -1) {
    console.log(`${item} found at index ${index}.`);
  } else {
    console.log(`${item} not found in the inventory.`);
  }
  return index;
}

// Function to sort the inventory alphabetically
function sortInventory(items) {
  items.sort();
  console.log('Inventory has been sorted alphabetically.');
}

// Function to get a slice of the inventory
function getInventorySlice(items, start, end) {
  const slice = items.slice(start, end);
  console.log(`Inventory slice from index ${start} to ${end}:`, slice);
  return slice;
}

// Function to delete an item from the inventory
function deleteItem(items, index) {
  if (index >= 0 && index < items.length) {
    delete items[index];
    console.log(`Item at index ${index} has been deleted.`);
  } else {
    console.log('Invalid index. No item deleted.');
  }
}

// Usage example
console.log('Initial inventory:');
displayInventory(inventory);

addItem(inventory, 'Highlighter');
removeLastItem(inventory);
removeFirstItem(inventory);
addItemToBeginning(inventory, 'Scissors');
reverseInventory(inventory);

console.log('\nUpdated inventory:');
displayInventory(inventory);

joinInventory(inventory);
inventoryToString(inventory);
removeItem(inventory, 2);

console.log('\nInventory after removal:');
displayInventory(inventory);

searchItem(inventory, 'Notebook');
sortInventory(inventory);

console.log('\nSorted inventory:');
displayInventory(inventory);

getInventorySlice(inventory, 1, 3);

deleteItem(inventory, 1);

console.log('\nFinal inventory:');
displayInventory(inventory);
