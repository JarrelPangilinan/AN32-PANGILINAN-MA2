/* 
Dynamic Smart Inventory Management System
This script manages the inventory of a fictional electronics store by dynamically updating 
product details and calculating the total inventory value. It also identifies the most expensive 
product and keeps track of stock levels efficiently.
*/

// Store Details
const storeName = "Pro Tech"; // The name of the store
const storeLocation = "Las Pinas City"; // The location of the store
const storeCapacity = 200; // The maximum number of products the store can hold

// Dynamic Product Inventory
let products = [
    { name: "Asus 15 TUF Pro", price: 89999, quantity: 20 },
    { name: "Iphone 16 Pro", price: 79999, quantity: 100 },
    { name: "Tablet", price: 12999, quantity: 80 },
    { name: "RTX 1650 Super", price: 12999, quantity: 40 },
    { name: "Corsair 16 GB RAM", price: 4999, quantity: 50 }

];

// Perform Calculations
let totalInventoryValue = 0; // Variable to store the total value of the products

// Calculate the total inventory value
for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}

// Modify Product Information: Updating Laptop quantity after receiving a shipment
const additionalLaptops = 10; // Number of additional laptops received
products[0].quantity += additionalLaptops; // Update the quantity of laptops

// Product with Highest Price
let mostExpensiveProduct = products[0].name; // Initialize with the first product
let highestPrice = products[0].price; // Store the highest price

// Determine the most expensive product
for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price; // Update the highest price
        mostExpensiveProduct = product.name; // Update the most expensive product name
    }
}

// Output results
console.log("Store Name:", storeName);
console.log("Store Location:", storeLocation);
console.log("Total Number of Products in Store:", products.reduce((sum, product) => sum + product.quantity, 0));
console.log("Total Value of Inventory: ₹", totalInventoryValue);
console.log("Updated Quantity of Laptops:", products[0].quantity);
console.log("Most Expensive Product:", mostExpensiveProduct);

// Stretch Goal: Adding an additional product
const newProduct = { name: "Smartwatch", price: 7999, quantity: 60 }; // New product details
products.push(newProduct); // Add the new product to the inventory

// Update total inventory value after adding new product
totalInventoryValue += newProduct.price * newProduct.quantity; // Update the total value

// Output the updated total value after adding new product
console.log("Updated Total Value of Inventory after adding Smartwatch: ₹", totalInventoryValue);
