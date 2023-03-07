/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return


















/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
  // your code here
}
// don't forget to call the function!
// -------- student solutions ----------

function reverseString(str) {
  var reversed = " ";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseString(str) {
  var empty_str = [];
  length = str.length - 1;
  for (i = length; i >= 0; i--) {
    empty_str.push(str[i])
  }
  return empty_str.join("");
}


/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str = "") {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function reverseString2(str = "") {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    // prepend instead of append since we aren't looping backwards.
    reversed = str[i] + reversed;
  }

  return reversed;
}

/**
 * - Time: O(3n) -> O(n) linear.
 * - Space: O(2n) -> O(n) linear. Split and join are both duplicating data.
 * @param {string} str
 * @returns {string}
 */
const functionalReverseStr = (str = "") => str.split("").reverse().join("");