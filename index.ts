#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 6000;
let myPin = 5678;

console.log("\n\tWelcome In Shez ATM Machine\n");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    }
])
if (pinAnswer.pin === myPin){
console.log("Pin Is Correct,Login Sucessfully!");

let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select an Operation",
      choices: ["Withdraw Amount", "Check Balance"],  
    }
])
if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw",
        }
    ])
    if(amountAns.amount > myBalance){
        console.log("Insufficent Balance");
    }
    else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Sucessfully`);
        console.log(`Your remaining balance is: ${myBalance}`);
    }
  }
    else if (operationAns.operation === "Check Balance"){
    console.log(`Your Current Account Balance Is: ${myBalance}`);
}
}
else{
    console.log("Pin Is Incorrect, Try Again!");
}