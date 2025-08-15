export const add = (a, b) => {
  return a + b
}

export const subtract = (a, b) => {
  return a - b
}

export const multiply = (a, b) => {
  return a * b
}

export const divide = (a, b) => {
  if (b === 0) {
    return "Don't be silly, you can't divide by 0!"
  }
  return a / b
}
