/* 
  Given in an alumni interview
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 

  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */


const str1 = "aaaabbcddd";
const expected1 = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return












// -------------------------------


/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {

}


// comment
/*
this is a
multiline 
comment
*/

/**
 * this a cool function!!! 😊
 * @returns a string with a 'hello'
 */
function hello() {
    return "hello"
}




// ---------- student solutions
function encodeStr(str) {
    var count = 1
    var new_str = ""
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++
        }
        if (str[i] != str[i + 1]) {
            if (count == 1) {
                new_str += str[i]
            }
            else {
                new_str += str[i] + count
                count = 1
            }
        }
    }
    if (new_str.length == str.length) {
        console.log(str)
        return str
    }
    else {
        console.log(new_str)
    }
}

encodeStr(str4)


function encodeStr(str) {
    var counter = 1
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter += 1
        }

        if (str[i] != str[i + 1]) {
            if (counter == 1) {
                newStr += str[i]
            }
            else {
                newStr += str[i] + counter
                counter = 1
            }
        }
    }
    return newStr
}
console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr("aab"))

function encodeStr(str) {
    new_str = ''
    count = 1
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count += 1
        } else {
            if (count == 1) {
                new_str += str[i]
            }
            else {
                new_str += str[i] + count
            }
            count = 1
        }
    }
    if (new_str.length < str.length) {
        return new_str
    } else {
        return str
    }
}
test = encodeStr(str4)
console.log(test)


/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {string} str
 * @returns {string}
 */
function encodeStr(str = "") {
    let encoded = "";
    let compareChar = str[0];
    let compareCharCount = 0;

    for (let i = 0; i < str.length; i++) {
        const isDuplicate = str[i] === compareChar;
        const isLastIteration = i === str.length - 1;

        if (isDuplicate) {
            compareCharCount++;
        }

        /* 
        Making the below an else is too restrictive and makes it more complex to
        cover all the cases w/o repeating conditions and nesting conditions.
        However, the above if statement could be turned into an else below this,
        but it may be clearer to keep it as two ifs since the conditions are both
        stated explicitly.
        */
        if (isDuplicate === false || isLastIteration) {
            encoded += compareChar + compareCharCount;
            compareChar = str[i];
            compareCharCount = 1;
        }
    }
    return encoded.length > 0 && encoded.length < str.length ? encoded : str;
}

/**
 * - Time: O(n) linear, because nested while loop increments i as well so it is
 *    reducing the for loops iterations equally.
 * - Space: O(n) linear, because worst case every letter occurs one time so the
 *    output will be as long as input.
 * @param {string} str
 * @returns {string}
 */
function strEncode(str = "") {
    let encoded = "";

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let dupeCount = 1;

        while (str[i + 1] === currChar) {
            dupeCount++;
            i++;
        }
        encoded += currChar + dupeCount;
    }
    return encoded.length < str.length ? encoded : str;
}

/**
 * - Time: O(2n) linear -> O(n).
 * - Space: O(2n) -> O(n), because given str is stored twice, in hash table and
 *    output str.
 * @param {string} str
 * @returns {string}
 */
function strEncodeHashTable(str = "") {
    const charFreq = {};
    let encoded = "";

    for (const char of str) {
        if (charFreq[char]) {
            charFreq[char]++;
        } else {
            charFreq[char] = 1;
        }
    }

    // iterate back over str to get the proper order
    // order of keys on obj is not guaranteed to be in order
    for (const char of str) {
        if (charFreq[char] > 0) {
            encoded += char + charFreq[char];
            // Next time the same letter is looked up, it won't be added again.
            charFreq[char] = 0;
        }
    }
    return encoded.length < str.length ? encoded : str;
}