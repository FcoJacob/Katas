import { describe, expect, it } from '@jest/globals'
import LeapYear from "./leap_year";

describe('leap_year_kata', () => {
    it('should return true if it is divisible by 400', () => {
        const isLeapYear = new LeapYear(2000);
        expect(isLeapYear.isLeapYear()).toBe(true);
    });

    it('should return false if it is divisible by 100 but not by 400', () => {
        const isLeapYear = new LeapYear(1400);
        expect(isLeapYear.isLeapYear()).toBe(false);
    });

    it('should return true if it is divisible by 4 but not by 100', () => {
        const isLeapYear = new LeapYear(1404);
        expect(isLeapYear.isLeapYear()).toBe(true);
    });

    it('should return false if not divisible by 4', () => {
        const isLeapYear = new LeapYear(1405);
        expect(isLeapYear.isLeapYear()).toBe(false);
    });
})
