
# Js Machine Coding Round Question By //!@BhanuPratap

# JavaScript Coding Challenges
Welcome to my JavaScript Coding Challenges repository! Here you'll find a collection of various JavaScript functions and algorithms designed to solve common programming problems. Each function is self-contained and demonstrates different aspects of JavaScript programming.

## Table of Contents

- [Reverse a String](#reverse-a-string)
- [Check if an Object is an Array](#check-if-an-object-is-an-array)
- [Empty an Array](#empty-an-array)
- [Check if a Number is an Integer](#check-if-a-number-is-an-integer)
- [Duplicate an Array](#duplicate-an-array)
- [Reverse a Number](#reverse-a-number)
- [Check if a String is a Palindrome](#check-if-a-string-is-a-palindrome)
- [Alphabetical Order](#alphabetical-order)
- [Capitalize First Letter of Each Word](#capitalize-first-letter-of-each-word)
- [Get Type of Argument](#get-type-of-argument)
- [Count Letter Occurrences](#count-letter-occurrences)
- [Array Sum](#array-sum)
- [Sum Non-String Members](#sum-non-string-members)
- [Filter Gender in Array of Objects](#filter-gender-in-array-of-objects)
- [Clone an Array](#clone-an-array)
- [Get First Elements of Array](#get-first-elements-of-array)
- [Get Last Elements of Array](#get-last-elements-of-array)
- [Most Frequent Item in Array](#most-frequent-item-in-array)
- [Shuffle an Array](#shuffle-an-array)
- [Union of Two Arrays](#union-of-two-arrays)
- [Longest Word in Sentence](#longest-word-in-sentence)
- [Remove Duplicate Elements](#remove-duplicate-elements)
- [Check if Strings are Anagrams](#check-if-strings-are-anagrams)
- [Count Vowels in String](#count-vowels-in-string)
- [Largest Number in Array](#largest-number-in-array)
- [Check if Number is Prime](#check-if-number-is-prime)
- [Calculate Factorial](#calculate-factorial)
- [Remove Whitespace from String](#remove-whitespace-from-string)


## Reverse a String

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
_____________________________________________________
const str = "bhanu pratap is my name";
const reverseStr = str.split(" ").reverse().join(" ");
const reverseStr = str.split(" ").map((e)=> e.split("").reverse().join(""));
const reverseStr = str
  .split(" ")
  .map((e) => e.split("").reverse().join(""))
  .reverse()
  .join(" ");
console.log(reverseStr);
_____________________________________________________
const str2 = "sare jahan se aacha hindostan hamara";
const savedStr2 = str2
  .split(" ")
  .map((e) => e.split("").reverse().join(""))
  .reverse()
  .join(" ");
console.log(savedStr2); */
_____________________________________________________
 function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseStr("bhanu suno"));
_____________________________________________________
const str = "bhanu pratap is my name";
// const reverseStr = str.split(" ").reverse().join(" ");
// const reverseStr = str.split(" ").map((e)=> e.split("").reverse().join(""));
const reverseStr = str
  .split(" ")
  .map((e) => e.split("").reverse().join(""))
  .reverse()
  .join(" ");
console.log(reverseStr);
_____________________________________________________
const str2 = "sare jahan se aacha hindostan hamara";
const savedStr2 = str2
  .split(" ")
  .map((e) => e.split("").reverse().join(""))
  .reverse()
  .join(" ");
console.log(savedStr2); */
_____________________________________________________
 function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseStr("bhanu suno"));
 
```

### How to check if an object is array or not

 ```
const checkArray = (e) => {
  return Array.isArray(e);
};
console.log(checkArray([]));
console.log(checkArray({})); */
```

### How to empty an array in js and do not reset it to a new array, and do not loop thorugh to pop each value
```
const arrray = [1, 2, 3, 4, 5, 6];
console.log((arrray.length = 0)); */
```

### How would you check if a number is an integer..?
```
// Number.isInteger(1);

let a = 12.6;
if (a % 1 === 0) {
  console.log("integer");
} else {
  console.log("not a integer");
}

``` 
