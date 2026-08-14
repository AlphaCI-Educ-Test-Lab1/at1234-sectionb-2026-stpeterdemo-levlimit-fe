// The four arithmetic operations. See INSTRUCTIONS.md for the brief.
//
// `divide` is the only one that can refuse: there is no number that means
// "you divided by zero", so returning 0 or Infinity would hide the mistake
// from whoever called us. It throws instead.

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

/** Throws when `b` is zero rather than returning a misleading number. */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error(`Cannot divide ${a} by zero`);
  }
  return a / b;
}
