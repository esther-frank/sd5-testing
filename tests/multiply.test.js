import { multiply } from '../calculator-functions.js'

test('should return correct result when a and b are positive', () => {
  //Arrange
  const a = 2
  const b = 3
  //Act
  const result = multiply(a, b)
  //Assert
  expect(result).toBe(6)
})

test('should return correct result when a is negative', () => {
  //Arrange
  const a = -2
  const b = 3
  //Act
  const result = multiply(a, b)
  //Assert
  expect(result).toBe(-6)
})

test('should return correct result when a and b are negative', () => {
  //Arrange
  const a = -2
  const b = -3
  //Act
  const result = multiply(a, b)
  //Assert
  expect(result).toBe(6)
})

test('should return correct result when a is 0', () => {
  //Arrange
  const a = 0
  const b = 3
  //Act
  const result = multiply(a, b)
  //Assert
  expect(result).toBe(0)
})