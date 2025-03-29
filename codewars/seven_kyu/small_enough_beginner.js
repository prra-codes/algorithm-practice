//  Sat, 29/03/25

// 22. Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }

  return true;
}

console.log(smallEnough([4, 2, 3, 1, 5], 6));
