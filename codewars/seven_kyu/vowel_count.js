//  Tue, 25/04/25

// 14. Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const lowerCaseStr = str.toLowerCase();
  const arrStr = lowerCaseStr.split('');

  let count = 0;

  for (let i = 0; i < arrStr.length; i++) {
    if (
      arrStr[i] === 'a' ||
      arrStr[i] === 'e' ||
      arrStr[i] === 'i' ||
      arrStr[i] === 'o' ||
      arrStr[i] === 'u'
    ) {
      count++;
    }
  }
  return count;
}

console.log(getCount('Superman'));
