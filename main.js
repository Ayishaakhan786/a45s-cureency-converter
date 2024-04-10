#! /bin/usr/env node
import inquirer from "inquirer";
// Make a list of currencies & their exchange rates.
let exchange_rate = {
    "USD": 1, // It is a Base currency.
    "EUR": 0.9, // European currency 
    "JYP": 113, // Japanese currency. 
    "CAD": 1.4, // Canadian currency.
    "ASD": 1.75, // American dollars.
    "PKR": 200, // Pakistani rupees. 
};
let user_answer = await inquirer.prompt([
    {
        name: "from_Currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "ASD", "PKR"]
    },
    {
        name: "to_Currency",
        type: "list",
        message: "selet the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "ASD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        mesage: "enter amount to convert currency:"
    }
]);
// perform conversion by using formula.
let from_amount = exchange_rate[user_answer.from_Currency];
let to_amount = exchange_rate[user_answer.to_Currency];
let amount = user_answer.amount;
// Formula of currency conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the amount that you have converted.
console.log(`Coverted Amount = ${converted_amount}`);
