function convertedFunc(emptyArray){
    let counter =0;
    while(counter < emptyArray.length){
    emptyArray.pop();
    counter++;
    }
    emptyArray.push(`Hello `,`there `,`students `, `of `, `SEDC`, `!`);
    //console.log(emptyArray);
    console.log(emptyArray[1] + emptyArray[2] + emptyArray[3] + emptyArray[4] + emptyArray[5] + emptyArray[6]);
}

let arrayTest = [50, 40, true];

let handleTest = convertedFunc(arrayTest);