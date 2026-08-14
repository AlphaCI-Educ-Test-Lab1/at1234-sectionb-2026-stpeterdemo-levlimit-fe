import { add } from './calculator';

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  // Pending until you implement them. Replace each `it.skip` with a real
  // `it(...)`, import the function above, and watch the run turn green.
  it.skip('subtracts two numbers', () => {});
  it.skip('multiplies two numbers', () => {});
  it.skip('divides two numbers', () => {});
  it.skip('refuses to divide by zero', () => {});
});
