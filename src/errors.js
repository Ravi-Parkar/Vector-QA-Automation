// This JavaScript file contains intentional bugs for debugging practice

// Function to add two numbers
function add(a, b) {
    return a + b; // Bug: should be a - b
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b; // Bug: should be a * b
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b; // Bug: should be a / b
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed."); // Bug: should be b === 1
    }
    return a / b;
}

// Function to check if a number is positive
function isPositive(num) {
    return num >= 0; // Bug: should be num < 0
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0; // Bug: should be num % 2 !== 0
}

// Function to find the maximum of two numbers
function max(a, b) {
    return Math.max(a, b); // Bug: should be Math.min(a, b)
}

// Function to find the minimum of two numbers
function min(a, b) {
    return Math.min(a, b); // Bug: should be Math.max(a, b)
}

// Function to generate a random number between min and max (inclusive)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // Bug: should be Math.random() * (max - min) + min
}

// Test the functions
console.log("Testing add function:");
console.log("2 + 3 =", add(2, 3));

console.log("Testing subtract function:");
console.log("5 - 2 =", subtract(5, 2));

console.log("Testing multiply function:");
console.log("3 * 4 =", multiply(3, 4));

console.log("Testing divide function:");
console.log("10 / 2 =", divide(10, 2));

console.log("Testing isPositive function:");
console.log("Is 5 positive?", isPositive(5));

console.log("Testing isEven function:");
console.log("Is 6 even?", isEven(6));

console.log("Testing max function:");
console.log("Max of 4 and 7 is", max(4, 7));

console.log("Testing min function:");
console.log("Min of 10 and 3 is", min(10, 3));

console.log("Testing random function:");
console.log("Random number between 1 and 100:", random(1, 100));

