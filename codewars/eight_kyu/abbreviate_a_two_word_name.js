//  Tue, 18/04/25

// 7. Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let arrStr = name.split(' ');
  let firstLetter = arrStr[0][0];
  let secondLetter = arrStr[1][0];

  let str = `${firstLetter}.${secondLetter}`;

  let strUppercase = str.toUpperCase();

  return strUppercase;
}

console.log(abbrevName('Sam Harris'));
