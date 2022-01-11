let fName = [`Nikola`, `Marko`];
let lName = [`Trajkoski`, `Petkovski`];

function printOrder(firstName, lastName){ 
    for(let i = 0; i < firstName.length; i++){
        lastName[i] = lastName[i];
        console.log(i+1 + `. ` + firstName[i] + ` ` + lastName[i]);
    }
}

let testLoop = printOrder(fName, lName);
