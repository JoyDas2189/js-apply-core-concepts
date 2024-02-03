const milesToKilometer = (miles) => {
    const kilometers = miles * 1.60934;
    return kilometers.toFixed(2);
}

const distanceInKilo1 = 2;
console.log(milesToKilometer(distanceInKilo1));

const distanceInKilo2 = 5;
console.log((milesToKilometer(distanceInKilo2)));