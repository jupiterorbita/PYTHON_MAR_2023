/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

// // Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// const expectedD = "GIT";


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return
















/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
  // your code here
}
// don't forget to call the function!

// -------- student solutions --------

function acronymize(string) {
  var newWord = true;
  var acr = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      newWord = true;
    }
    else if (string[i] !== ' ' && newWord == true) {
      newWord = false;
      var code = string[i].charCodeAt(0);
      if (code > 96) {
        code -= 32;
        acr += String.fromCharCode(code)
      }
      else {
        acr += string[i];
      }
    }
  }
  return acr
}

console.log(acronymize('Hi my name is Joseph'))
console.log(acronymize('    hello     world   '))


function acronymize(str) {
  let acronym = "";
  let newArray = str.split(" ")
  console.log(newArray)
  for (let i = 0; i < newArray.length; i++) {
    let word = newArray[i];
    if (word.length > 0) {
      acronym += word[0].toUpperCase();
    }
  }
  console.log(acronym)
}

acronymize(str4)

function acronymize(str) {
  var newArr = [];
  for (var i = 0; i < str.length; i++) {
    if (i === 0) {
      newArr.push(str[i]);
    }
    if (str[i] === " ") {
      newArr.push(str[i + 1]);
    }
  }
  return newArr.join('').toUpperCase();
}

// Acronymize (works on strA-strC)
function acronymize(str) {
  new_string = [];
  new_string.push(str[0]);
  for (i = 0; i <= str.length; i++) {
    if (str[i] == " ") {
      new_string.push(str[i + 1])
    }
  }
  return new_string.join("").toUpperCase();
}

// Acronymize (works on strA-strD)
function acronymize2(str) {
  new_string = [];
  if (str[0] != " ") {
    new_string.push(str[0])
  }
  for (i = 0; i <= str.length; i++) {
    if (str[i] == " " && str[i + 1] != " ") {
      new_string.push(str[i + 1])
    }
  }
  return new_string.join("").toUpperCase();
}

// ------------- instructors ----------
/*****************************************************************************/

/**
 * - Time: O(n + m) linear -> O(n) where n is wordsStr.length and
 *    m is wordsArr.length.
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymizeWithSplit(wordsStr = "") {
  let acronym = "";
  const wordsArr = wordsStr.split(" ");

  for (const word of wordsArr) {
    // Splitting can result in empty strings.
    if (word !== "") {
      // upper case each letter as it's added so toUpperCase doesn't have
      // to loop over each acronym char at the end to upper case.
      acronym += word[0].toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(n) linear
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymize(wordsStr = "") {
  let acronym = "";

  for (let i = 0; i < wordsStr.length; i++) {
    // These booleans add readability because they are named descriptively,
    // they also simplify how many conditional statements or nested conditions
    // are needed.
    const currentChar = wordsStr[i];
    const isCurrentCharSpace = currentChar === " ";
    const isPreviousCharSpace = wordsStr[i - 1] === " ";
    const isFirstLetterOfWord =
      (i === 0 && !isCurrentCharSpace) ||
      (!isCurrentCharSpace && isPreviousCharSpace);

    if (isFirstLetterOfWord) {
      acronym += currentChar.toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(n) linear
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymize2(wordsStr = "") {
  let acronym = "";

  for (let i = 0; i < wordsStr.length; i++) {
    const currentChar = wordsStr[i];
    const isCurrentCharSpace = currentChar === " ";
    const isPreviousCharSpace = wordsStr[i - 1] === " ";
    let isFirstLetterOfWord = !isCurrentCharSpace && isPreviousCharSpace;

    // Special case for idx 0 being start of word.
    if (i === 0 && !isCurrentCharSpace) {
      isFirstLetterOfWord = true;
    }

    if (isFirstLetterOfWord) {
      acronym += currentChar.toUpperCase();
    }
  }
  return acronym;
}

/**
 * Manually split into words to get the first letter of each.
 * - Time: O(n) linear
 * - Space: O(n) linear.
 * @param {string} wordsStr
 * @returns {string}
 */
function acronymize3(wordsStr = "") {
  let acronym = "";
  let currentWord = "";

  for (let i = 0; i < wordsStr.length; i++) {
    const isSpace = wordsStr[i] === " ";

    if (currentWord.length > 0 && isSpace) {
      acronym += currentWord[0].toUpperCase();
      // reset for next word.
      currentWord = "";
    } else if (isSpace === false) {
      currentWord += wordsStr[i];
    }

    // Reaching the end also indicates the current word is complete.
    if (i === wordsStr.length - 1 && currentWord.length > 0) {
      acronym += currentWord[0].toUpperCase();
    }
  }
  return acronym;
}

/**
 * - Time: O(4n) -> O(n) linear. Split, filter, map, and join each loop.
 * - Space: O(3n) -> O(n) linear. Split, filter, and map each create a new arr.
 * @param {string} s
 * @returns {string}
 */
const functionalAcronymize = (s = "") =>
  s
    // Regex can be used if more control over split is needed.
    // This example removes any non alphabetical chars with split.
    .split(/[^A-Za-z]/)
    // Create a new array without empty strings from the split array.
    .filter((word) => word.length > 0)
    // map the filtered words into a new arr of upper-cased first letters.
    .map((word) => word[0].toUpperCase())
    // join the mapped array of first letters together without a separator.
    .join("");
