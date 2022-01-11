function findOddEven(mixArray, typeNum){
    if(typeNum == "even"){
        for(i = 0; i < mixArray.length; i++){
            if(mixArray[i] % 2 === 0){
                console.log(`even numbers form array is: ${mixArray[i]}`);
            
            }
            
        }
    }
    if(typeNum == "odd"){
        for(i = 0; i < mixArray.length; i++){
            if(mixArray[i] % 2 === 1){
                console.log(`odd numbers from array is: ${mixArray[i]}`);
                
            }
        }
    }
}

let arrayTestOne = [5, 3, 2, 4, 1, 6, 5, 3, 8, 9, 7, 6, 4, 2, 1, 3, 5];
let oddArrayTest = findOddEven(arrayTestOne,"even");