//  Fri, 28/03/25

// 21. Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function (test, original) {
  const lowerCaseTest = test.toLowerCase();
  const lowerCaseOriginal = original.toLowerCase();

  if (lowerCaseTest.length !== lowerCaseOriginal.length) {
    return false;
  }

  const sortedTest = lowerCaseTest.split('').sort().join('');
  const sortedOriginal = lowerCaseOriginal.split('').sort().join('');

  for (let i = 0; i < test.length; i++) {
    if (sortedTest[i] !== sortedOriginal[i]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));
