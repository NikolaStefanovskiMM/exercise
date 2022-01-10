var testVar = `0`;
var parseTest = parseInt(testVar);
var diffType = Boolean(parseTest);

console.log(typeof(testVar));
console.log(typeof(parseTest));
console.log(typeof(diffType));
console.log(diffType);