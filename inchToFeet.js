// const myFeet = 67.20;
// const myInches = myFeet / 12;

// console.log(myInches.toFixed(1));


let inchToFeet = (inches) => {
    let height = inches / 12;
    return height.toFixed(1);
}

let myInches = 67.20;
console.log(inchToFeet(myInches));

let dadaInches = 70;
console.log(inchToFeet(dadaInches));

let dadiInches = 58;
console.log(inchToFeet(dadiInches))