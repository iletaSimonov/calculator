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


window.alert("The sum is: " + add);
window.alert("The subtraction is: " + subtract);
window.alert("The miltiplication is: " + multiply);
window.alert('The division is: ' + divide);
