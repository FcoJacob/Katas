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

    it('should return the sum of the values, when receiving a string with comma-separated numbers', () => {
        const calculator = new StringCalculator("1,2");

        expect(calculator.add()).toBe(3);
    });

    it('should return the sum of all values, when receiving a string with comma-separated numbers', () => {
        const calculator = new StringCalculator("1,2,3,4");

        expect(calculator.add()).toBe(10);
    });

    it('should return the sum of all values, when receiving a string with trolley-separator numbers', () => {
        const calculator = new StringCalculator("1\n2\n3\n4");

        expect(calculator.add()).toBe(10);
    });

    it('should support different separators, if the string starts with "//[delimiter]\n..."', () => {
        const calculator = new StringCalculator("//[;]\n1;2;3;4");

        expect(calculator.add()).toBe(10);
    });

    it('should throw a "negatives not alloweed" exception, when entering negative values', () => {
        const calculator = new StringCalculator("//[;]\n-4");

        expect(() => calculator.add()).toThrow('negatives not allowed, (-4)');
    });

    it('should show all negative values, passed as an argument', () => {
        const calculator = new StringCalculator("//[;]\n-4;-3;-2;-1");

        expect(() => calculator.add()).toThrow('negatives not allowed, (-4,-3,-2,-1)');
    });

    it('should Values greater than 1000 should be ignored', () => {
        const calculator = new StringCalculator("//[;]\n4;3;1002;1");

        expect(calculator.add()).toBe(8);
    });

    it('should customised dividers can be of any length', () => {
        const calculator = new StringCalculator("//[;%]\n4;%3;%2;%1");

        expect(calculator.add()).toBe(10);
    });
})
