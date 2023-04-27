import { describe, test, expect } from 'vitest';
import { getCounter } from '../utils/counter';

describe('counter', () => {
    test('should returned the provide counter value', () => {
        const counter = 2;
        expect(getCounter(counter)).toBe(2);
    })
})