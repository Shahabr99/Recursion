/** product: calculate the product of an array of numbers. */
function product(nums, i=0) {
  
  if(i === nums.length) return 1
  return nums[i] * product(nums, i + 1)
}
product([1,3,2])



/** longest: return the length of the longest word in an array of words. */
function longest(words, longestWord = "") {
  if(words.length === 0) return longestWord

  if(words[0].length > longestWord.length) {
    longestWord = words[0]
  }
  return longest(words.slice(1), longestWord)
}




/** everyOther: return a string with every other letter. */
function everyOther(str, i = 0, string="") {
  if(i >= str.length) {
    return string
  }
  
  if(i % 2 === 0) {
    let letter = str[i]
    string += letter
  }
  return everyOther(str, i+1, string)
}
 


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = str.length-1, string = "") {
  if(i < 0) return str === string

  if(i <= str.length && i >= 0) {
    string += str[i]
  }

  return isPalindrome(str, i - 1, string);
  
}



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i >= arr.length) return -1
  
  if(arr[i] === val ) {
    return i
  }
  
  return findIndex(arr, val, i+1)
}



/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, string="") {
  if(i < 0) return string

  string += str[i]

  return revString(str, i-1, string)
}



/** gatherStrings: given an object, return an array of all of the string values. */
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};


function gatherStrings(obj, result=[]) {
  for(let key in obj) {
    if(typeof obj[key] === "string") {
      result.push(obj[key])
    }else if(typeof obj[key] === "object") {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result
}

console.log(gatherStrings(nestedObj)) // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
