function accountStatus(mySum){
    let parseMySum = parseInt(mySum);
    let myMoney = 5000;
    if(parseMySum <= myMoney){
       let billans = myMoney - parseMySum
       console.log(`You take a: ${mySum}$, and your account status is: ${billans}$`);
       return billans, myMoney;
    }
    else{
        console.log(`You don't have enough money on your account!`);
    }
}

let firstCall = prompt((`Money needed`));
let money = accountStatus(firstCall);