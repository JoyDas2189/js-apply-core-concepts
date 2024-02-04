// const getSum = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum += element;
//     console.log(i, element, sum);
//   }
//   return sum;
// };
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getSum(myNumbers);


let findoutSum = (numbers) => {
    sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        let elements = numbers[i];
        sum += elements;
        console.log(sum);
    }
    return sum;
}
let myNumbers = [10, 20, 30, 40, 50];
findoutSum(myNumbers);

