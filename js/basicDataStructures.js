
// Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));



// Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


// Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
  arr.splice(1, 4);

console.log(arr);



// Add Items Using splice()

function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", 'BlanchedAlmond');
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
