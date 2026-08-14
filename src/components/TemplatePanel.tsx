'use client';

import { useState } from 'react';
import { add } from '../calculator';

export function TemplatePanel() {
  const [left, setLeft] = useState('2');
  const [right, setRight] = useState('2');

  function result(): string {
    const a = Number(left);
    const b = Number(right);
    if (Number.isNaN(a) || Number.isNaN(b)) return 'Enter two numbers';
    try {
      return String(add(a, b));
    } catch (error) {
      return error instanceof Error ? error.message : 'Something went wrong';
    }
  }

  return (
    <section>
      <label htmlFor="left">First number</label>
      <input id="left" value={left} onChange={(e) => setLeft(e.target.value)} />
      <label htmlFor="right">Second number</label>
      <input id="right" value={right} onChange={(e) => setRight(e.target.value)} />
      <p role="status">{result()}</p>
    </section>
  );
}
