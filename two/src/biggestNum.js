var num1 = prompt(`Enter the first number`);
var num2 = prompt(`Enter the second number`);
var num3 = prompt(`Enter the third number`);
var num4 = prompt(`Enter the forth number`);
var num5 = prompt(`Enter the fifth number`);

var parseNum1 = parseInt(num1);
var parseNum2 = parseInt(num2);
var parseNum3 = parseInt(num3);
var parseNum4 = parseInt(num4);
var parseNum5 = parseInt(num5);

var biggest
if(parseNum1 > parseNum2 && parseNum1 > parseNum3 && parseNum1 > parseNum4 && parseNum1 > parseNum5){
     alert(parseNum1);
}
else if(parseNum2 > parseNum1 && parseNum2 > parseNum3 && parseNum2 > parseNum4 && parseNum2 > parseNum5){
    alert(parseNum2);
}
else if(parseNum3 > parseNum1 && parseNum3 > parseNum2 && parseNum3 > parseNum4 && parseNum3 > parseNum5){
    alert(parseNum3);
}
else if(parseNum4 > parseNum1 && parseNum4 > parseNum2 && parseNum4 > parseNum3 && parseNum4 > parseNum5){
    alert(parseNum4);
}
else if(parseNum5 > parseNum1 && parseNum5 > parseNum2 && parseNum5 > parseNum3 && parseNum5 > parseNum4){
    alert(parseNum5);
}
else{
    alert(`all number are the same!`);
}