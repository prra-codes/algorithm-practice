//  Mon, 17/04/25

// 4. Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  const allNums = x.map((num) => Number(num));

  let total = 0;
  for (let i = 0; i < allNums.length; i++) {
    total += allNums[i];
  }

  return total;
}

console.log(sumMix([9, 3, '7', '3']));
