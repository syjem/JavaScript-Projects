
// Fahrenheit to Celsius

function celsius(f) {
    return (5/9) * (f-32);
}

console.log(celsius(100));



// Celsius to Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
  
    return fahrenheit;
  }
  
  convertCtoF(30);