
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