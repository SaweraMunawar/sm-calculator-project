#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter a first number", type: "number", name: "firstnumber" },
    { message: "Enter a second number", type: "number", name: "secondnumber" },
    {
        message: "Select any one operation to perform action",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
console.log(answer);
// condition statement
if (answer.Operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operators === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operators === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operators === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select a valid operator");
}
