//  find the number of non-digit characters 

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;
console.log(result);


// Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let output = userCheck.test(username);
console.log(output);



// Match-Whitespace
let x = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let a = x.match(countWhiteSpace);
console.log(a);




// Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let space = sample.match(countNonWhiteSpace);
console.log(space);




// Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let r = pwRegex.test(sampleWord);
console.log(r);



// Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let i = str.replace(fixRegex, replaceText);
console.log(i);


// Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let j = hello.replace(wsRegex, "");
console.log(j);