function calculatingAge(humanAge){
    console.log(humanAge);
    let sum = humanAge * 7;
    console.log("Your Dog's age is: " + humanAge + `. ${sum} is the calculated age.`);
    return sum;
}

let dogAge = calculatingAge(10);
let dogAge2 = calculatingAge(5);
