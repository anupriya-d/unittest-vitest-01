import { describe, it, expect } from 'vitest';
import { subtract } from './subtract';

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 2)).toBe(8);
    expect(subtract(20, 30)).toBe(-10);
  });
});
