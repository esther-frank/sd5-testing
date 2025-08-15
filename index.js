import { add, subtract, multiply, divide } from './calculator-functions.js'

const calculate = () => {
  const num1Input = parseFloat(document.getElementById('num1').value)
  const num2Input = parseFloat(document.getElementById('num2').value)
  const operation = document.getElementById('operation').value

  // here's where we do the calculations
  let result = null
  if (
    num1Input &&
    num2Input &&
    typeof num1Input === 'number' &&
    typeof num2Input === 'number'
  ) {
    switch (operation) {
      case '+':
        result = add(num1Input, num2Input)
        break
      case '-':
        result = subtract(num1Input, num2Input)
        break
      case '*':
        result = multiply(num1Input, num2Input)
        break
      case '/':
        result = divide(num1Input, num2Input)
        break
      default:
        break
    }
  } else {
    result = 'Please enter two numbers'
  }

  const resultDisplay = document.getElementById('result')

  resultDisplay.innerHTML = result
}

const calculateButton = document.getElementById('calculateButton')
calculateButton.addEventListener('click', calculate)
