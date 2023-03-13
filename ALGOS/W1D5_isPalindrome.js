/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */
// level
// racecar
// tacocat

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;



// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return






// -------------------------------





/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) { }



// student solutions
function isPalindrome(str) {
    for (var i = 0; i < Math.ceil(str.length / 2); i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

function isPalindrome(str) {
    for (i = 0; i < (Math.ceil(str.length / 2)); i++) {
        if (str[i] == str[str.length - i - 1]) {
            console.log(true)
        }
        else {
            console.log(false)
            return false
        }
    }
}









/*****************************************************************************/












/**
 * - Time: O(n/2) -> O(n) linear.
 * - Space: O(1) constant.
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str = "") {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        // Looping inwards from both sides.
        const leftChar = str[i];
        const rightChar = str[str.length - 1 - i];

        if (leftChar !== rightChar) {
            return false; // early exit
        }
    }
    return true;
}

/**
 * - Time: O(3n) -> O(n) linear. Each method used is looping.
 * - Space: O(2n) linear. Split and join both create a copy.
 * @param {string} str
 * @returns {boolean}
 */
const functionIsPalindrome = (str = "") =>
    str === str.split("").reverse().join("");