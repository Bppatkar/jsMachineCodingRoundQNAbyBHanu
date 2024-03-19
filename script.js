/* //Js Machine Coding Round Question By //!@BhanuPratap
//! reverse string

const str = "bhanu pratap is my name";
// const reverseStr = str.split(" ").reverse().join(" ");
// const reverseStr = str.split(" ").map((e)=> e.split("").reverse().join(""));
const reverseStr = str
  .split(" ")
  .map((e) => e.split("").reverse().join(""))
  .reverse()
  .join(" ");
console.log(reverseStr);

const str2 = "sare jahan se aacha hindostan hamara";
const savedStr2 = str2
  .split(" ")
  .map((e) => e.split("").reverse().join(""))
  .reverse()
  .join(" ");
console.log(savedStr2); */
// _____________________________________________________________________

/* //!how to check if an object is array or not

const checkArray = (e) => {
  return Array.isArray(e);
};
console.log(checkArray([]));
console.log(checkArray({})); */

//! how to empty an array in js and do not reset it to a new array, and do not loop thorugh to pop each value
/* const arrray = [1, 2, 3, 4, 5, 6];
console.log((arrray.length = 0)); */

/* //! how would you check if a number is an integer..?
// Number.isInteger(1);

let a = 12.6;
if (a % 1 === 0) {
  console.log("integer");
} else {
  console.log("not a integer");
}
 */

//! duplicate the array like
//! [1,2,3,4,5] ==> [1,2,3,4,5,1,2,3,4,5] 5 k bad again repeating
/*
function duplicateArray(arr) {
  return arr.concat(arr);
}
console.log(duplicateArray([1, 2, 3, 4, 5]));
 */

//* function question start
/* //! write a function that reverse a number

function reverseNumber(e) {
  return Number(e.toString().split("").reverse().join(""));
}
console.log(reverseNumber([1234]));
 */
/* 
function reverseNumber(e) {
  let rev = 0;
  while (e > 0) {
    let rem = e % 10;
    rev = rev * 10 + rem;
    e = Math.floor(e / 10);
  }
  return rev;
}
console.log(reverseNumber(1234)); */

//! write a js function that checks whether a passed string is palindrome or not
/* function strPalChecker(str) {
  if (str === str.split("").reverse().join("")) {
   return "palindrome";
  } else {
    return "not palindorme";
  }
}
strPalChecker("poop");
strPalChecker("pool"); */

//!write a js function that returns a passed string with letters in alphabetical order
/* function alphabeticalChecker(str) {
  return str.split("").sort();
}

console.log(alphabeticalChecker("anurag"));
console.log(alphabeticalChecker("pratap"));
 */

//! write a js function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

/* function captilizeWord(str) {
  return str
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
    .join(" ");
}
console.log(captilizeWord("bhanu tum kaise ho"));
console.log(captilizeWord("sare jahan se aacha")); */

/* function upperCaseConverter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  // return str.charAt(0).toUpperCase() + str.substring(1);
}
console.log(upperCaseConverter("anurag "));
console.log(upperCaseConverter("bhanu"));
console.log(upperCaseConverter("pratap")); */

//! write a js function which accepts an argument and returns the type
//*Note:- There are six possible values that typeof returns: object,boolean, function, string, number, and undefined
/* 
function returnType(e) {
  return typeof e;
}

console.log(returnType(42));
console.log(returnType(true));
console.log(returnType("bhanu"));
console.log(returnType({}));
console.log(returnType(undefined));
console.log(returnType(function () {})); */

//! write a js functino to get the number of occurrences of each letter in specified string
// it means which character comes how many times
/* function occurrenceChar(str) {
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
} */

//! same solution using map method
/* function occurrenceChar(str) {
  let occ = {};
  str.split("").map((e) => (occ[e] = (occ[e] || 0) + 1));
  return occ;
}

console.log(occurrenceChar("bhanu Pratap")); */
// ______________________________________________________________________________
//* loop
//! loop an array and add all members of it
// const arr = [1, 2, 3, 4, 5];
/* let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
} */

/* let sum = 0;
arr.forEach(function (i) {
  sum =+ sum + i; 
});
console.log(sum); */

//! in an array of numbers and strings, only add those members which are not strings
/* let arr = ["hehehe", 123, "bhanu", 5543, "ais", 8345, "drg", 4, 456, 234, "as"];
let sum = 0;
arr.forEach(function (e) {
  if (typeof e === "number") {
    sum += e;
  }
});
console.log(sum); */

//! loop an array of objects and remove all objects which don't have gender's value male
/* let people = [
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

// removing non male person
for (let i = 1; i <= count; i++) {
  for (let j = 0; j < people.length; j++) {
    if (people[j].gender !== "male") {
      people.splice(j, 1);
    }
  }
}
console.log(people); */

//* Array
//! write a js function to clone an array
/* function clonedArr(arr) {
  return [...arr];
}
console.log(clonedArr([1, 2, 3, 4, 4, 5, "ajk", "ae", "asd"]));
 */

/* function clonedArr(e) {
  let newArray = [];
  e.forEach((elem) => newArray.push(elem));
  return newArray;
}
console.log(clonedArr([1, 2, 3, 4, 5])); */

/* function clonedArr(e) {
  return e.map((elem) => elem);
}
console.log(clonedArr([1, 2, 3, 4, 5, 6])); */

//! write a js function to get the first element of an array. passing a parameter 'n' will return  the first 'n' elements of the array.
//? it means if ([1,2,3,4,5]) ye array h to first element print ho pr ([1,2,3,4,5],3) aise paramenter de diya jaye to first 3 element print ho ([1,2,3,4,5],2) h to 2 first 2 element print ho

/* function firstElement(e, n = 1) {
  if (n <= e.length) {
    for (let i = 0; i < n; i++) {
      console.log(e[i]);
    }
  } else {
    console.log(n + " to elements hi nahi h");
  }
}

console.log(firstElement([2, 23, 24, 6, 7], 15));
 */

//! write a js function to get the last element of an array. passing a parameter 'n' will return the last 'n' element of the array.

/* function lastElement(e, n = 1) {
  if (n <= e.length) {
    for (let i = 0; i < n; i++) {
      console.log(e[e.length - 1 - i]);
    }
  } else {
    console.log(n + " itne to element hi nahi h");
  }
}

console.log(lastElement([2, 23, 24, 6, 7], 3));
 */

//! write a js program to find the most frequent item of an array.
// menas konsa banda sbse jyada bar aaya h

/* function freq(arr) {
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
]); */

//! write a js program to shuffle an array
//  Shuffling an array means randomly rearranging its elements.

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

//! write a js program to compute the union of two arrays sample data:
// console.log(union([1,2,3],[100,2,1,10]))
// [1,2,3,10,100]

function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));
