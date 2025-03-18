//  Tue, 18/04/25

// 6. Remove exclamations marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const arrStr = s.split('');

  const filteredWordsArr = arrStr.filter((char) => char !== '!');

  const filteredWords = filteredWordsArr.join('');

  return filteredWords;
}

console.log(removeExclamationMarks('I can do this! Okay!'));
