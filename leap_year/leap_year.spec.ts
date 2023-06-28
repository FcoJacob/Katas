import { describe, expect, it } from '@jest/globals'
import LeapYear from "./leap_year";

describe('leap_year_kata', () => {
    it('should return true if it is divisible by 400', () => {
        const isLeapYear = new LeapYear().isLeapYear(2000);
        expect(isLeapYear).toBe(true);
    });
})
