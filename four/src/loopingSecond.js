function calcMinMax(userInput){
    let index = 0;
    let min = Infinity;
    let max = -Infinity;
    while(index < userInput.length){
        //console.log(index);
        if(userInput[index] > max){
            max = userInput[index];
            //console.log(`Max number is: ${max}`);
        }if(userInput[index] < min){
            min = userInput[index];
            console.log(`Min number is: ${min}`);
        }
        index++;
        console.log(`Max number is: ${max}`);
    }return min, max;
}

//testArray = [3, 5, 6, 8, 11];
testArrayTwo = [11, 35, 46, 93, 5, 43, 53];
//testFunc = calcMinMax(testArray);
testFunc = calcMinMax(testArrayTwo)
