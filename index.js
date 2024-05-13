#!/usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Enter your sentence",
});
let words_count = answers.words.trim().split("").length;
console.log(`your sentence has ${words_count},words`);
