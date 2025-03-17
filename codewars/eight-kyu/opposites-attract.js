//  Mon, 17/04/25

// 5. Opposites Attract

function lovefunc(flower1, flower2) {
  let evenOrOddFlower1 = flower1 % 2 === 0;
  let evenOrOddFlower2 = flower2 % 2 === 0;

  if (evenOrOddFlower1 === true && evenOrOddFlower2 === false) {
    return true;
  } else if (evenOrOddFlower1 === false && evenOrOddFlower2 === true) {
    return true;
  } else if (evenOrOddFlower1 === true && evenOrOddFlower2 === true) {
    return false;
  } else if (evenOrOddFlower1 === false && evenOrOddFlower2 === false) {
    return false;
  }
}
