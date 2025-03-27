//  Thu, 27/04/25

// 18. Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  const arrayOfLengths = [];

  for (let i = 0; i < array.length; i++) {
    arrayOfLengths.push(array[i].length);
  }

  arrayOfLengths.sort((a, b) => a - b);

  const correctOrderArr = [];

  for (let i = 0; i < arrayOfLengths.length; i++) {
    for (let j = 0; j < arrayOfLengths.length; j++) {
      if (arrayOfLengths[i] === array[j].length) {
        correctOrderArr.push(array[j]);
      }
    }
  }

  return correctOrderArr;
}

console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));
