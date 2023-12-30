'use strict'
let questionForUser = prompt('Виберіть одну дію, яку хочете зробити(add, sub, mult, div):');// <-- We ask the user to choose an action
let userNumber1 = prompt('Введіть перше число:');// <-- We ask the first value
let userNumber2 = prompt('Введіть друге число:');// <-- We ask the second value

let num1 = parseFloat(userNumber1);// <-- A variable for the first value
let num2 = parseFloat(userNumber2);// <-- A variable for the second value

let result;// <-- Variable to output the result

//Calculator
if(questionForUser === 'add'){
result = num1 + num2;
alert(num1 + '+' + num2 + '=' + result);
} else if(questionForUser === 'sub'){
result = num1 - num2;
alert(num1 + '-' + num2 + '=' + result);
} else if(questionForUser === 'mult'){
result = num1 * num2;
alert(num1 + '*' + num2 + '=' + result);
} else if(questionForUser === 'div'){
result = num1 / num2;
alert(num1 + '/' + num2 + '=' + result);
} else{
alert('Введіть коректні дані, будь ласка. Тут може бути лише значення: add, sub, mult або div.')
};