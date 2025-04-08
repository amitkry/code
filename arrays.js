//To find the number of elements in an array
let num = [10, 20, 30, 40];
console.log(num.length); // 4
arr.length = 2;  // Truncates the array
console.log(num); // [10, 20]

//Creates a new array from arguments
let arr1 = Array.of(5, 10, 15);
console.log(arr1); // [5, 10, 15]

//Converts iterable to an array (String to character array)
let arr2 = Array.from("hello");
console.log(arr2); // ['h', 'e', 'l', 'l', 'o']

//To check whether the value is array or not
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false

//Adds elements at the end
let numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers); // [1, 2, 3, 4]

//Removes the last element
numbers.pop();
console.log(numbers); // [1, 2, 3]

//Adds elements at the beginning
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3]

//Removes the first element
numbers.shift();
console.log(numbers); // [1, 2, 3]

//Adds/removes elements at a specific index
numbers.splice(1, 1, 99);
console.log(numbers); // [1, 99, 3]

//Copies part of an array within itself
let arrCopy = [1, 2, 3, 4, 5];
arrCopy.copyWithin(0, 3, 5);
console.log(arrCopy); // [4, 5, 3, 4, 5]

//Fills element with a value
let arrFill = new Array(5).fill(0);
console.log(arrFill); // [0, 0, 0, 0, 0]


//Accessing Elements
//Returns an element at a specific index
let arrAt = [10, 20, 30, 40];
console.log(arrAt.at(-1)); // 40

//Find the first index of an element
console.log(arrAt.indexOf(30)); // 2

//Find the last index of an element
console.log(arrAt.lastIndexOf(10)); // 0

//Checks if an element exists
console.log(arrAt.includes(40)); // true


//Searching Element
//Returns the first matching element
let users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
console.log(users.find(user => user.id === 2)); // {id: 2, name: "Bob"}

//Returns the index of the first match
console.log(users.findIndex(user => user.name === "Alice")); // 0

//Returns the last matching element
console.log(users.findLast(user => user.id < 3)); // {id: 2, name: "Bob"}

//Returns the last matching index
console.log(users.findLastIndex(user => user.id < 3)); // 1


//Iterating the arrays
//forEach() loop
let nums = [1, 2, 3];
nums.forEach(num => console.log(num * 2)); // 2, 4, 6

//map() 
let squared = nums.map(num => num ** 2);
console.log(squared); // [1, 4, 9]

//filter()
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2]

//reduce() - It reduces the array to a single value
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

//reduceRight() - Reduces from right to left
let diff = nums.reduceRight((acc, num) => acc - num);
console.log(diff); // -2 (3 - 2 - 1)

//Sorting and Reversing
//sort() - Sorts elements
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango"]

//reverse() - Reverses the array
fruits.reverse();
console.log(fruits); // ["Mango", "Banana", "Apple"]

//Merging & Slicing
//concat() - merging two or more arrays
let merged = [1, 2].concat([3, 4]);
console.log(merged); // [1, 2, 3, 4]

//slice() - Extracts a portion of an array
let sliced = merged.slice(1, 3);
console.log(sliced); // [2, 3]

//Checking Conditions
//every() - Checks if all elements match a condition
console.log([5, 10, 15].every(num => num > 0)); // true

//some() - Checks if at least one element matches
console.log([5, 10, 15].some(num => num > 10)); // true

//Converting & Joining
//join() - Converts an array to a string
console.log(["Hello", "World"].join(" ")); // "Hello World"

//toString() - converts to a string
console.log([1, 2, 3].toString()); // "1,2,3"

//Working with keys and values
//entries() - Return key value pairs
for (let [index, value] of ["a", "b"].entries()) {
    console.log(index, value); // 0 'a', 1 'b'
}

//keys() - Returns array indices
console.log([...["a", "b"].keys()]); // [0, 1]

//values() - Returns array values
console.log([...["a", "b"].values()]); // ['a', 'b']







