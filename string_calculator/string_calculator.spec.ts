import { describe, expect, it } from '@jest/globals'
import StringCalculator from "./string_calculator";

describe('StringCalculator', () => {
    it('should return 0, when string is empty', () => {
        const calculator = new StringCalculator("");
        expect(calculator.add()).toBe(0);
    });
    it('should return value as number, when string is length 1', () => {
        const calculator = new StringCalculator("1");
        expect(calculator.add()).toBe(1);
    });
})
