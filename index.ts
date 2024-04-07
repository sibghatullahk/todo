#! /usr/bin/env node
import inquirer from 'inquirer'
//Creating a todo list using inquirer
//push, pop, concat

let todos : string[] = [];
let condition = true;

while (condition)
{ let addTask= await inquirer.prompt(
    [
    {
        name: "todo",
        type: "input",
        message: "What do you want to add to your todo list?"
    },
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add another task?",
        default: false
    },
]);
todos.push(addTask.todo)
condition= addTask.addMore;
console.log(todos);
}