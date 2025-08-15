import { divide } from '../calculator-functions.js'

test('should return correct result when a > b', () => {
  //Arrange
  const a = 10
  const b = 2
  //Act
  const result = divide(a, b)
  //Assert
  expect(result).toBe(5)
})

test('should return correct result when a < b', () => {
  //Arrange
  const a = 2
  const b = 10
  //Act
  const result = divide(a, b)
  //Assert
  expect(result).toBe(0.2)
})

test('should return an error message when b = 0', () => {
  //Arrange
  const a = 10
  const b = 0
  //Act
  const result = divide(a, b)
  //Assert
  expect(result).toBe("Don't be silly, you can't divide by 0!")
})

test('should return correct result when a is negative', () => {
  //Arrange
  const a = -10
  const b = 2
  //Act
  const result = divide(a, b)
  //Assert
  expect(result).toBe(-5)
})

test('should return correct result when a and b are negative', () => {
  //Arrange
  const a = -10
  const b = -2
  //Act
  const result = divide(a, b)
  //Assert
  expect(result).toBe(5)
})