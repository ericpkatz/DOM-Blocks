const items = [
  { id: 1, name: "apple", price: 1.75, category: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, category: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, category: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, category: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, category: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, category: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, category: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, category: 4, inventory: 100 },
];

const cart = [];

const ids = prompt(
  "enter numbers separated by commas of the ids for the items you want to add to your cart",
  "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(id));

// ------------------ Complete the functions written below ------------------------------ //

function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item
  items.forEach((item) => {
    console.log(item.name);
  });
}

/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
 */
function findItemById(id) {
  // TODO: Use the .find() method to return the item who's id matches the passed in id
}

/**
 * @returns {number} the sum of all inventory items
 */

function calculateTotalInventory() {
  // TODO Use the .reduce() method to return the total number of items in inventory
}

/**
 * @returns {number} the total price of all inventory items combined
 */
function calculateAllInventoryPrice() {
  // TODO Use the .reduce() method to return the total price of all the items in inventory
}

/**
 * @returns {items[]} Returns a new array with capitalized names
 */
function capitalizeNames() {
  // TODO:  Use the .map() and .slice() methods and return a new items array with the item names capitalized
}

/**
 * @param {string} name
 * @returns {number} the price of the item passed in
 */
function getItemPriceByName(name) {
  // TODO: Use an array method of your choice to get the price of the item passed in
}

/**
 * @param {categoryId} id of category to find
 * @returns {items[]} array of all items which belong to the given category
 */
function filterItemsByCategoryId(categoryId) {
  // TODO: use the .filter() method to filter out all items which don't belong the passed in category
}

/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {
  // TODO: Loop through your cart and return the total price of all items in your cart
}

function logCartItems() {
  // TODO: Loop through your cart and use the indexes to log the names of all items in your cart
}

// --------------------- Do not change the code below ------------------------ //

console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(`The item with id ${itemId} is ${findItemById(+itemId)}`);
