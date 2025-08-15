import { subtract } from '../calculator-functions.js'

test('should return correct result when a > b', () => {
  //Arrange
  const a = 8
  const b = 3
  //Act
  const result = subtract(a, b)
  //Assert
  expect(result).toBe(5)
})

test('should return correct result when a < b', () => {
  //Arrange
  const a = 3
  const b = 8
  //Act
  const result = subtract(a, b)
  //Assert
  expect(result).toBe(-5)
})

test('should return correct result when a is negative', () => {
  //Arrange
  const a = -3
  const b = 8
  //Act
  const result = subtract(a, b)
  //Assert
  expect(result).toBe(-11)
})

test('should return correct result when b is negative', () => {
  //Arrange
  const a = 3
  const b = -8
  //Act
  const result = subtract(a, b)
  //Assert
  expect(result).toBe(11)
})

test('should return correct result when both a and b are negative', () => {
  //Arrange
  const a = -3
  const b = -8
  //Act
  const result = subtract(a, b)
  //Assert
  expect(result).toBe(5)
})
