function calculatingHumanAge(birthYear){
    const d = new Date
    let currentYear = d.getFullYear();
    let sum = currentYear - birthYear;
    console.log(`You are ${sum} old.`);
    return sum;
}
const d = new Date
let currentYear = d.getFullYear();

let birtDate = calculatingHumanAge(1922);
let birthDate = calculatingHumanAge(1987);
let bitthDate2 = calculatingHumanAge(1993);