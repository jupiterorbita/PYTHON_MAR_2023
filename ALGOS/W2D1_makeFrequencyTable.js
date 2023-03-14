/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/
//                       v
const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  Bob: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

// create the function and decide what params it needs and what it will return






// ------ student solutions
function MapArray(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    // create key when new var is found
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    }
    // increment key val +1 when found again
    else {
      obj[arr[i]]++;
    }
  }
  return obj;
}

var example = MapArray(arr1)
var example2 = MapArray(arr2)
var example3 = MapArray(arr3)
console.log(example)
console.log(example2)
console.log(example3)

function frequency(arr) {
  var expected = {};
  for (var i = 0; i < arr.length; i++) {
    if (expected.hasOwnProperty(arr[i])) {
      expected[arr[i]]++;
    }
    else {
      expected[arr[i]] = 1;
    }
  }
  return expected
}

function makeFrequencyMap(arr) {
  var newDict = {}
  for (var i = 0; i < arr.length; i++) {
    if (newDict[arr[i]] == undefined) {
      newDict[arr[i]] = 1
    }
    else {
      newDict[arr[i]] += 1

    }

  }
  console.log(newDict)
}

// -----------------------------------------
/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 *  Possible hint: .hasOwnProperty() <- Don't know it? Google it as a group!
 */
function makeFrequencyTable(arr) {
  //Your code here
}

console.log(makeFrequencyTable(arr1))
console.log("Expected: ", expected1);
console.log(makeFrequencyTable(arr2))
console.log("Expected: ", expected2);
console.log(makeFrequencyTable(arr3))
console.log("Expected: ", expected3);





// =====================================

function makeFrequencyTable(arr) {
  let freq = {};
  for (let elem of arr) {
    freq.hasOwnProperty(elem) ? freq[elem]++ : freq[elem] = 1;
    //  condition             ?  if true     :    if false
    /*
    if (freq.hasOwnProperty(elem)){
        freq[elem]++
    } else {
        freq[elem] = 1
    }
    */
  }
  return freq;
}


function oddOccurrencesInArray(nums) {
  //Your code here
  let freq = makeFrequencyTable(nums);
  for (let key in freq) {
    if (freq[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
  return false;
}

function oddOccurrencesInArray(nums) {
  var myObj = makeFrequencyTable(nums);
  // console.log(myObj);
  var keys = Object.keys(myObj);
  for (var i = 0; i < keys.length; i++) {
    if (myObj[keys[i]] % 2 == 1) {
      return keys[i];
    }
  }
}
