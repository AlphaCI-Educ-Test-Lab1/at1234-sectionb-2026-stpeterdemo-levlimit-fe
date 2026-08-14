import { add, subtract, multiply, divide } from './calculator';

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('adds negative numbers', () => {
    expect(add(-3, -4)).toBe(-7);
    expect(add(-3, 3)).toBe(0);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it('subtracts in order — subtract(2, 5) is -3', () => {
    expect(subtract(2, 5)).toBe(-3);
  });

  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-3, 4)).toBe(-12);
  });

  it('multiplies anything by zero to zero', () => {
    expect(multiply(7, 0)).toBe(0);
    expect(multiply(0, 7)).toBe(0);
  });

  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-10, 2)).toBe(-5);
  });

  it('refuses to divide by zero', () => {
    expect(() => divide(1, 0)).toThrow('Cannot divide 1 by zero');
  });

  it('divides zero by a number without complaint', () => {
    expect(divide(0, 5)).toBe(0);
  });
});
