/* 
  Zip Arrays into Map
  Given two arrays, create an associative array and return it (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expected3 = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}

// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return









// ------------------------------




/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) { }





// --------- student solutions ---------
function zipArraysIntoMap(keys, values) {
    var new_dict = {}
    for (var i = 0; i < keys.length; i++) {
        new_dict[keys[i]] = values[i]
    }
    return new_dict
}

console.log(zipArraysIntoMap(keys1, vals1))
console.log(zipArraysIntoMap(keys2, vals2))
console.log(zipArraysIntoMap(keys3, vals))

function zipArraysIntoMap(keys, values) {
    var expected = {};
    for (var i = 0; i < keys.length; i++) {
        expected[keys[i]] = values[i]
    }
    return expected
}







/*****************************************************************************/

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(n) linear, because 1 loop to access elements from both arrays.
 * - Space: O(n).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys = [], values = []) {
    const hashMap = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const val = values[i];

        hashMap[key] = val;
    }
    return hashMap;
}

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(n) linear, because 1 loop to access elements from both arrays.
 * - Space: O(n).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
const functionalZipArraysIntoMap = (keys = [], values = []) =>
    keys.reduce((obj, key, i) => {
        obj[key] = values[i];
        return obj;
    }, {});

module.exports = { zipArraysIntoMap, functionalZipArraysIntoMap };