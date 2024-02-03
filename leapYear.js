const leepYearCheck = (year) => {
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year.";
    }
    else {
        return "Not a Leap Year.";
    }
} 

const input = 2024;
console.log(leepYearCheck(input));