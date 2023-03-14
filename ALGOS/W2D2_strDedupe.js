/* 
  Given a string,
  return a new string with the duplicates excluded
  //Bonus: Keep only the last instance of each character.
*/
//            v
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

// RIOT

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

// create the function and decide what params it needs and what it will return













// --- christian ----
function stringDedupe(str) {
    seenChars = {};
    newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        var char = str[i];
        if (!seenChars.hasOwnProperty(char)) {
            newStr = char + newStr
        } else {
            seenChars[char] = true
        }
    }
    return newStr
}

// bonus version with set

function stringDedupe(str) {
    seenChars = new Set();
    newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        var char = str[i];
        if (!seenChars.has(char)) {
            newStr = char + newStr;
        } else {
            seenChars.add(char);
        }
    }
    return newStr;
}



// ------- student solutions ---------
//base algo
function strDedupe(str) {
    if (str === "") {
        return "";
    }
    let myMap = {};
    let myStr = "";
    for (i = 0; i < str.length; i++) {
        if (!myMap.hasOwnProperty(str[i])) {//loop through the input str and each character to the map once
            myMap[str[i]] = i; //the value we assign doesn't matter
            myStr += str[i]; //add each key to myStr
        }
        else continue //added for clarity
    }
    return myStr;
}

//bonus - keep track of idx of the character we add to the map to show we are returning the last instance of it
//this version returns in order, but tracks the idx of the last instance

function strDedupeBonus(str) {
    if (str === "") {
        return "";
    }
    let myMap = {};
    let myStr = "";
    for (i = 0; i < str.length; i++) {
        myMap[str[i]] = i; //always add or update the key with current idx value
    }
    console.log(myMap);
    for (var key in myMap) {
        myStr += key; //add each key to myStr
    }
    return myStr;
}

//this version returns in the order of last instance

function strDedupeBonus2(str) {
    if (str === "") {
        return "";
    }
    let myMap = {};
    let myStr = "";
    for (i = 0; i < str.length; i++) {
        if (myMap.hasOwnProperty(str[i])) {
            delete myMap[str[i]] //delete if exists
        }
        myMap[str[i]] = i; //always add
    }
    console.log(myMap);
    for (var key in myMap) {
        myStr += key; //add each key to myStr
    }
    return myStr;
}

let str5 = "melee";
let expected5 = "mle";

// -----


function remove_dup(str) {
    let tempObj = {};
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] in tempObj) {
            tempObj[str[i]] += 1;
        }
        else {
            tempObj[str[i]] = 1;
        }
    }
    for (let key in tempObj) {
        newString += key;
    }
    console.log(newString)
}
remove_dup(str1);

function dedupe(str) {
    var expected = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < i; j++) {
            // check for duplicate characters
            if (str[i] == str[j]) {
                break;
                // break out of "if statement" if the letters are the same
            }
        }
        // add character to expected string, when the if statement is true
        if (j == i) {
            expected = expected + [str[i]];
        }
    }
    return expected
}

console.log(dedupe(str2))

function stringDedupe(str) {
    obj = {};
    newStr = "";
    repeat = "";
    for (var i = 0; i < str.length; i++)
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
            newStr += str[i];
        }
        else
            repeat += str[i]
    if (repeat.length == newStr.length)
        newStr = repeat;
    return newStr;
}


function stringDedupe(str) {
    newStr = "";

    //     for (var i = 0; i < str.length; i++) {
    //         if (newStr.indexOf(str[i]) == -1) {
    //             newStr += str[i]
    //         }
    //     }
    //     return newStr
    // }
    for (var i = str.length - 1; i >= 0; i--) {
        if (newStr.indexOf(str[i]) == -1) {
            newStr = str[i] + newStr
        }
    }
    return newStr
}




function removeIfRepeat(str) {
    var newStr = ''
    if (str.length == 0) {
        return ""
    }
    else {
        for (var i = 0; i < str.length; i++) {
            if (newStr.includes(str[i])) {
                continue;
            }
            else {
                newStr += str[i]
            }
        }
    }
    return newStr
}







/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) { }

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(2n) -> O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function stringDedupe(str = "") {
    let distinctStr = "";
    const seen = {};

    // loop backwards to include last occurrence
    for (let i = str.length - 1; i >= 0; --i) {
        if (!seen[str[i]]) {
            distinctStr = str[i] + distinctStr;
            seen[str[i]] = true;
        }
    }
    return distinctStr;
}

/**
 * Keeps first occurrence, no hash table approach.
 * - Time: O(n^2) quadratic due to .include being nested loop.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function stringDedupe2(str = "") {
    let distinctStr = "";

    for (const char of str) {
        if (distinctStr.includes(char) === false) {
            distinctStr += char;
        }
    }
    return distinctStr;
}

/**
 * - Time: O(3n) -> O(n) linear. Convert to Set. Convert to array. join.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
const stringDedupeWithSet = (str = "") => [...new Set(str)].join("");