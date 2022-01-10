function calcSumOfFiveNumbers(fiveNumber){
   let a = fiveNumber[0];
   let b = fiveNumber[1];
   let c = fiveNumber[2];
   let d = fiveNumber[3];
   let e = fiveNumber[4];
   let sum = a + b + c + d + e;
   console.log(`Result from 5 numbers is: ${sum}`);
   return sum;
 }

 /*function validateNumber(numberFive){
    let a = numberFive[0];
    let b = numberFive[1];
    let c = numberFive[2];
    let d = numberFive[3];
    let e = numberFive[4];
    if (a && b && c && d && e){
        console.log(`This is array of valid numbers`);
    }
    else{
        console.log(`This is array from not valid numbers`);
    }
 }*/

 let arrayOne = [10, 20, 15, 15, 10];
 let arrayTwo = [3, 14, 53, 12, 18];
 let arrayThree = [1, 10, true, `10`, `cat`];

 let testOne = calcSumOfFiveNumbers(arrayOne);
 let testTwo = calcSumOfFiveNumbers(arrayTwo);
 //let testThree = validateNumber(arrayTwo);
 //let testFour = validateNumber(arrayThree);