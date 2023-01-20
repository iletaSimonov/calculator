const number1 = parseInt(prompt('Enter a number: '));
const number2 = parseInt(prompt('Enter another number: '));

function add(number1,  number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


window.alert("The sum is: " + add(number1,number2));
window.alert("The subtraction is: " + subtract(number1,number2));
window.alert("The miltiplication is: " + multiply(number1,number2));
window.alert('The division is: ' + divide(number1,number2));
