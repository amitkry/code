//Question - 1
// Create an array of 5 fruits and print the 2nd and 3rd fruit
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango

//Question - 2
let numbers = [1, 2, 3];

// Add 4 to the end
numbers.push(4);

// Remove the first element
numbers.shift();

console.log(numbers); // Output: [2, 3, 4]

//Question - 3

let cities = ["Delhi", "Mumbai", "Kolkata"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

//Question - 4
//Find the maximum number in an array
let nums = [5, 9, 1, 3];
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("Max:", max); // Output: Max: 9


//Question - 5
//To reverse an array
let arr = [1, 2, 3, 4];
let reversed = arr.reverse();
console.log(reversed); // Output: [4, 3, 2, 1]


//Question - 6
//To check whether the element is in the array or not
let animals = ["cat", "dog", "lion"];
console.log(animals.includes("dog")); // true
console.log(animals.includes("tiger")); // false


//Question - 7
//To get the index of any item
let items = ["pen", "pencil", "eraser"];
let index = items.indexOf("pencil");
console.log(index); // 1

//Question - 8
//To convert an Array of Strings into a sentence
let words = ["Pro", "Developing", "Champs"];
console.log(words.join(" ")); // "Pro Developing Champs"



