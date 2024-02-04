// factorial Number....

let factorial = (number) => {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
};
let input = 10;
console.log(factorial(input));

// forward way...

let factorialNumber = (number) => {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};
let inputNumber = 10;
console.log(factorialNumber(10));
