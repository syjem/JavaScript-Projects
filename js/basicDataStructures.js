
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




// Determined which data items are greater than 10

  function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);





//  Filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
    let newArr = [];
      for(let i=0; i<arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
          newArr.push(arr[i]);
        }
      }
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



// Add Key-Value Pairs to JavaScript Objects

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };

    foods.bananas = 13;
    foods.grapes = 35;
    foods.strawberries = 27;
  
  console.log(foods);



// Modify an Object Nested Within an Object

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  userActivity.data.online = 45;
  console.log(userActivity);



//  Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return(foods[scannedItem]);
  }
  console.log(checkInventory("apples"));



// Use the delete Keyword to Remove Object Properties

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;

  console.log(foods);



// Check if an Object has a Property

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }
  console.log(isEveryoneHere(users));



// Iterate Through the Keys of an Object with a for...in Statement

const u = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  function countOnline(usersObj) {
  let n = 0;
  for(let x in usersObj) {
    if(usersObj[x].online === true) {
      n++;
      }
   
    }
  return(n);
  } 
  console.log(countOnline(u));


// Generate an Array of All Object Keys with Object.keys()

let k = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
  
      return(Object.keys(obj));
  }
  console.log(getArrayOfUsers(k));
