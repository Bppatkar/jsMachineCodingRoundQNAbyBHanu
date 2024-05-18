
# Js Machine Coding Round Question By ##Bhanu Pratap Patkar

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

## Check if an Object is an Array

```javascript
const checkArray = (e) => {
  return Array.isArray(e);
};
console.log(checkArray([]));
console.log(checkArray({})); 
```

## Empty an Array


### How to empty an array in js and do not reset it to a new array, and do not loop thorugh to pop each value


```javascript
const arrray = [1, 2, 3, 4, 5, 6];
console.log((arrray.length = 0)); 
```

## Check if a Number is an Integer


```javascript
// Number.isInteger(1);

let a = 12.6;
if (a % 1 === 0) {
  console.log("integer");
} else {
  console.log("not a integer");
}

``` 
### Duplicate an Array


```javascript
//  [1,2,3,4,5] ==> [1,2,3,4,5,1,2,3,4,5] 5 k bad again repeating

function duplicateArray(arr) {
  return arr.concat(arr);
}
console.log(duplicateArray([1, 2, 3, 4, 5]));
 ```

# Function question start


## Reverse a Number

```Javascript
function reverseNumber(e) {
  return Number(e.toString().split("").reverse().join(""));
}
console.log(reverseNumber([1234]));
 ```
_____________________________________________________
```Javascript
function reverseNumber(e) {
  let rev = 0;
  while (e > 0) {
    let rem = e % 10;
    rev = rev * 10 + rem;
    e = Math.floor(e / 10);
  }
  return rev;
}
console.log(reverseNumber(1234)); 
```
_____________________________________________________

## Check if a String is a Palindrome


```Javascipt
function strPalChecker(str) {
  if (str === str.split("").reverse().join("")) {
   return "palindrome";
  } else {
    return " not palindorme";
  }
}
strPalChecker("poop");
strPalChecker("pool"); 
```
_____________________________________________________

## Alphabetical Order


```Javascript
function alphabeticalChecker(str) {
  return str.split("").sort();
}

console.log(alphabeticalChecker("anurag"));
console.log(alphabeticalChecker("pratap"));
 ```

## Capitalize First Letter of Each Word

```Javascipt
function captilizeWord(str) {
  return str
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
    .join(" ");
}
console.log(captilizeWord("bhanu tum kaise ho"));
console.log(captilizeWord("sare jahan se aacha")); 
```
_____________________________________________________
```Javascipt

function upperCaseConverter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  // return str.charAt(0).toUpperCase() + str.substring(1);
}
console.log(upperCaseConverter("anurag "));
console.log(upperCaseConverter("bhanu"));
console.log(upperCaseConverter("pratap")); 

```

## Get Type of Argument


//*Note:- There are six possible values that typeof returns: object,boolean, function, string, number, and undefined


```Javascipt
function returnType(e) {
  return typeof e;
}

console.log(returnType(42));
console.log(returnType(true));
console.log(returnType("bhanu"));
console.log(returnType({}));
console.log(returnType(undefined));
console.log(returnType(function () {})); 

```

## Count Letter Occurrences


// it means which character comes how many times


```Javascipt
function occurrenceChar(str) {
  let occ = {};
  // return str.split("").forEach((e) => { //*forEach method does not return anything thats why we are using map method in second solution
  for (let e of str) {
    if (occ.hasOwnProperty(e)) {
      occ[e]++;
    } else {
      occ[e] = 1;
    }
  }
  return occ;
}
```

## Array Sum


```Javascipt
function occurrenceChar(str) {
  let occ = {};
  str.split("").map((e) => (occ[e] = (occ[e] || 0) + 1));
  return occ;
}

console.log(occurrenceChar("bhanu Pratap")); 
```

# Loop


## Sum Non-String Members


```Javascipt
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
} 

```

```Javascipt
let sum = 0;
arr.forEach(function (i) {
  sum =+ sum + i; 
});
console.log(sum);
```

```Javascipt
let arr = ["hehehe", 123, "bhanu", 5543, "ais", 8345, "drg", 4, 456, 234, "as"];
let sum = 0;
arr.forEach(function (e) {
  if (typeof e === "number") {
    sum += e;
  }
});
console.log(sum); 
```

## Loop an array of objects and remove all objects which don't have gender's value male
```Javascipt
 let people = [
  { name: "Alice", gender: "female" },
  { name: "shivani", gender: "female" },
  { name: "anjali", gender: "female" },
  { name: "Bob", gender: "male" },
  { name: "Bhanu", gender: "male" },
  { name: "Charlie" },
  { name: "David", gender: "male" },
];

// people = people.filter((e) => e.gender === "male");
// counting male
let count = 0;
people.forEach(function (e) {
  if (e.gender === "male") {
    count++;
  }
});
console.log(count);
```

#### removing non male person


```Javascipt
for (let i = 1; i <= count; i++) {
  for (let j = 0; j < people.length; j++) {
    if (people[j].gender !== "male") {
      people.splice(j, 1);
    }
  }
}
console.log(people); 
```

# Array

##Clone an Array


```Javascipt
function clonedArr(arr) {
  return [...arr];
}
console.log(clonedArr([1, 2, 3, 4, 4, 5, "ajk", "ae", "asd"]));
```

```Javascipt
function clonedArr(e) {
  let newArray = [];
  e.forEach((elem) => newArray.push(elem));
  return newArray;
}
console.log(clonedArr([1, 2, 3, 4, 5])); 
```
```Javascipt
function clonedArr(e) {
  return e.map((elem) => elem);
}
console.log(clonedArr([1, 2, 3, 4, 5, 6])); 
```

## Get First Elements of Array


##### it means if ([1,2,3,4,5]) ye array h to first element print ho pr ([1,2,3,4,5],3) aise paramenter de diya jaye to first 3 element print ho ([1,2,3,4,5],2) h to 2 first 2 element print ho


```Javascipt

function firstElement(e, n = 1) {
  if (n <= e.length) {
    for (let i = 0; i < n; i++) {
      console.log(e[i]);
    }
  } else {
    console.log(n + " to elements hi nahi h");
  }
}

console.log(firstElement([2, 23, 24, 6, 7], 15));
 ```

## Get Last Elements of Array


```Javascipt
 function lastElement(e, n = 1) {
  if (n <= e.length) {
    for (let i = 0; i < n; i++) {
      console.log(e[e.length - 1 - i]);
    }
  } else {
    console.log(n + " itne to element hi nahi h");
  }
}

console.log(lastElement([2, 23, 24, 6, 7], 3));
 ```

## Most Frequent Item in Array

// menas konsa banda sbse jyada bar aaya h

```Javascipt
function freq(arr) {
 let freq = {};
 arr.forEach((elem) => {
if (freq.hasOwnProperty(elem)) freq[elem]++;
else freq[elem] = 1;
 });
  const ans = Object.keys(freq).reduce(function (acc, num) {
    return freq[acc] > freq[num] ? acc : num;
  });
  console.log(ans);
}
freq([
  1, 1, 1, 1, 1, 1, 2, 3, 312, 1, 3, 8, 2, 4, 45, 5, 65, 6, 3, 1, 1, 2, 2, 2,
]); 
```

## Shuffle an Array


//  Shuffling an array means randomly rearranging its elements.

```Javascipt
function ShufflingArr(arr) {
  let suffleAra = arr.length;
  while (suffleAra > 0) {
    suffleAra--;
    let index = Math.floor(Math.random() * suffleAra);
    let temp = arr[suffleAra];
    arr[suffleAra] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

ShufflingArr([1, 2, 3, 4, 5, 6, 7]); 
```

##Union of Two Arrays


 ```Javascipt
 console.log(union([1,2,3],[100,2,1,10]))
 [1,2,3,10,100]
```
```Javascipt
function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); 
```

## Longest Word in Sentence


```Javascipt
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longWord = "";

  // now we use for of loop to iterate each words
  for (let word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}
console.log(
  longestWord(
    "kyu kya tum sach me thiruvananthapuram ja kar javascript seekh rahe ho "
  )
); 
```

## Remove Duplicate Elements


```Javascipt
function checkDuplicate(arr) {
   return [...new Set(arr)];
 }
```
```Javascipt
function checkDuplicate(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(checkDuplicate([1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 1, 7, 8, 5, 6]));
```

## Check if Strings are Anagrams


#### an anagram is word formed by rearranging the letters of other word. for example listen=> silent, tringle-> integral


```Javascipt
function checkAnagram(str1, str2) {
  // Convert strings to arrays and sort them
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();

  // Check if the sorted arrays are equal
  return arr1.join("") === arr2.join("");
}

console.log(checkAnagram("tringle", "integrl")); // Output: true
console.log(checkAnagram("listen", "silent")); // Output: true
console.log(checkAnagram("hello", "world")); // Output: false 
```

## Count Vowels in String


```Javascipt
function retVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  debugger;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(retVowel("bhanu pratap is my name")); 
```

## Largest Number in Array


```Javascipt
function largestNumberFinder(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(
  largestNumberFinder([
    5453, 4, 56435, 634, 243, 52345, 2452, 352, 435, 23453, 43453, 453, 45, 3,
  ])
);
console.log(largestNumberFinder([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
```

## Check if Number is Prime


// prime number is only divisible by 1 or self
```Javascipt

function checkPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) return num === 2;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(checkPrime(5)); 
```

## Calculate Factorial


```Javascipt
function factorialCheck(num) {
  if (num < 0) return "Factorial not defined for negative numbers";
  let count = 1;
  for (let i = 2; i <= num; i++) {
    count *= i;
  }
  return count;
}
console.log(factorialCheck(5)); 
```

## Remove Whitespace from String

```Javascipt
function removingWhiteSpace(str) {
  return str.replace(/\s+/g, "");
}
console.log(removingWhiteSpace("   bhan  u  "));

// example
var str = "  A B  C   D EF ";
console.log(str.replace(/\s/g, "#")); // ##A#B##C###D#EF#
console.log(str.replace(/\s+/g, "#")); // #A#B#C#D#EF#
```

