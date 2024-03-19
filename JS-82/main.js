// 1 
function greet(name) {
  return `Hello ${name}`;
}

const greeting = greet('John');
console.log(greeting);


// 2 

const numbers = [5, 12, 3, 17, 8, 9, 1, 4, 10, 93];

function printNumbersGreaterThan10(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i]);
    }
  }
}

printNumbersGreaterThan10(numbers);

// 3 

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case 'plus':
      result = num1 + num2;
      break;
    case 'minus':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }
  return result;
}

const addition = calculator(5, 3, 'plus');
console.log(addition);

const subtraction = calculator(10, 4, 'minus');
console.log(subtraction);

const multiplication = calculator(6, 7, 'multiply');
console.log(multiplication);

const division = calculator(20, 5, 'divide');
console.log(division);
