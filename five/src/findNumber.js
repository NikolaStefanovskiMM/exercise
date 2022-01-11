function findNumber(num, arrayNum){
    let n = 0
    for(let i = 0; i < arrayNum.length; i++){
        if(arrayNum[i] == num){n++}
    } 
     console.log(`There are ${n} occurrences od numbre ${num} in the array.`);
     return n
}

let numberArray = [10, 30, 5, 42, 5, 32, 8, 5, 15, 5, 1];
let numberOfArray = [4, 32, 6, 16, 6, 25, 6, 6, 40, 6, 6, 35, 6, 46, 6, 21, 6, 6];
let numberOfSecondArray = [3, 53, 3, 43, 23, 3, 28, 23, 2, 3, 3];

let testOne = findNumber(6,numberOfArray);
let testTwo = findNumber(5, numberArray);
let testThree = findNumber(3,numberOfSecondArray);