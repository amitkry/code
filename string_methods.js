let str = "  Hello JavaScript World!  ";

// 1. length → Returns the length of the string
console.log(str.length); // 27

// 2. toUpperCase() → Converts the entire string to uppercase
console.log(str.toUpperCase()); // "  HELLO JAVASCRIPT WORLD!  "

// 3. toLowerCase() → Converts the entire string to lowercase
console.log(str.toLowerCase()); // "  hello javascript world!  "

// 4. trim() → Removes whitespace from both ends
console.log(str.trim()); // "Hello JavaScript World!"

// 5. trimStart() → Removes whitespace from the beginning
console.log(str.trimStart()); // "Hello JavaScript World!  "

// 6. trimEnd() → Removes whitespace from the end
console.log(str.trimEnd()); // "  Hello JavaScript World!"

// 7. includes(substring) → Checks if the substring exists
console.log(str.includes("JavaScript")); // true

// 8. startsWith(substring) → Checks if string starts with given substring
console.log(str.trim().startsWith("Hello")); // true

// 9. endsWith(substring) → Checks if string ends with given substring
console.log(str.trim().endsWith("World!")); // true

// 10. indexOf(substring) → Returns first index of substring
console.log(str.indexOf("JavaScript")); // 8

// 11. lastIndexOf(substring) → Returns last index of substring
console.log(str.lastIndexOf("o")); // 23

// 12. charAt(index) → Returns character at given index
console.log(str.charAt(2)); // "H"

// 13. slice(start, end) → Extracts section of the string
console.log(str.slice(2, 7)); // "Hello"

// 14. substring(start, end) → Similar to slice (no negative index)
console.log(str.substring(2, 7)); // "Hello"

// 15. substr(start, length) → Extracts part of string (deprecated but still used)
console.log(str.substr(2, 5)); // "Hello"

// 16. replace(old, new) → Replaces first occurrence of substring
console.log(str.replace("JavaScript", "JS")); // "  Hello JS World!  "

// 17. replaceAll(old, new) → Replaces all occurrences
let str2 = "a-b-c-a-b";
console.log(str2.replaceAll("a", "x")); // "x-b-c-x-b"

// 18. split(separator) → Splits string into array
console.log(str.trim().split(" ")); // ["Hello", "JavaScript", "World!"]

// 19. concat() → Combines strings
let s1 = "Hello";
let s2 = "World";
console.log(s1.concat(" ", s2)); // "Hello World"

// 20. repeat(n) → Repeats the string n times
console.log(s1.repeat(3)); // "HelloHelloHello"

// 21. padStart(length, char) → Pads string from start
console.log("5".padStart(3, "0")); // "005"

// 22. padEnd(length, char) → Pads string from end
console.log("5".padEnd(3, "0")); // "500"

// 23. match() → Matches a string using RegEx
console.log(str.match(/JavaScript/)); // ["JavaScript"]

// 24. search() → Searches using RegEx, returns index
console.log(str.search("JavaScript")); // 8

// 25. localeCompare() → Compares two strings (returns -1, 0, or 1)
console.log("apple".localeCompare("banana")); // -1

// 26. valueOf() → Returns the primitive value
console.log(str.valueOf()); // Original string

// 27. toString() → Converts a value to a string
let num = 123;
console.log(num.toString()); // "123"
