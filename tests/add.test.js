import { add } from '../calculator-functions.js'

test('should return correct result when a and b are positive', () => {
  //Arrange
  const a = 2
  const b = 2
  //Act
  const result = add(a, b)
  //Assert
  expect(result).toBe(4)
})

test('should return correct result when a is negative', () => {
  //Arrange
  const a = -2
  const b = 2
  //Act
  const result = add(a, b)
  //Assert
  expect(result).toBe(0)
})

test('should return correct result when b is negative', () => {
  //Arrange
  const a = 2
  const b = -2
  //Act
  const result = add(a, b)
  //Assert
  expect(result).toBe(0)
})

test('should return correct result when both a and b are negative', () => {
  //Arrange
  const a = -2
  const b = -2
  //Act
  const result = add(a, b)
  //Assert
  expect(result).toBe(-4)
})
