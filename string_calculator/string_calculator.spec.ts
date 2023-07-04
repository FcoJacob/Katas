import { describe, expect, it } from '@jest/globals'
import StringCalculator from "./string_calculator";

describe('StringCalculator', () => {
    it('should return 0, when string is empty', () => {
        const calculator = new StringCalculator("");
        expect(calculator.add()).toBe(0);
    });
})
