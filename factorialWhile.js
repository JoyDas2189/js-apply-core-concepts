const factorial = (number) => {
    let i = number;
    let result = 1;

    while(i >= 1) {
        result = result * i;
        i--;
    }
    return result
}
let input = 10;
console.log(factorial(input));