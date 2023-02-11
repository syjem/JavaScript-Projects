
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



// Copy Array Items Using slice()

function forecast(arr) {
    return arr.slice(2, 4);
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



//  Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      let x = [...arr];
      newArr.push(x);
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([true, false, true], 2));



// Combine Arrays with the Spread Operator

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun" ]; 
    return sentence;
  }
  console.log(spreadOut());


// Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));