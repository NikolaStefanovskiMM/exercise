var birthYear = prompt(`Enter your birth year`);
var parseYear = parseInt(birthYear);

var zodiac = (parseYear - 4) % 12
if(zodiac == 0){
    console.log(`Rat`);
}
else if(zodiac == 1){
    console.log(`Ox`);
}
else if(zodiac == 2){
    console.log(`Tiger`);
}
else if(zodiac == 3){
    console.log(`Rabbit`);
}
else if(zodiac == 4){
    console.log(`Dragon`);
}
else if(zodiac == 5){
    console.log(`Snake`);
}
else if(zodiac == 6){
    console.log(`Horse`);
}
else if(zodiac == 7){
    console.log(`Goat`);
}
else if(zodiac == 8){
    console.log(`Monkey`);
}
else if(zodiac == 9){
    console.log(`Rooster`);
}
else if(zodiac == 10){
    console.log(`Dog`);
}
else{
    console.log(`Pig`);
}