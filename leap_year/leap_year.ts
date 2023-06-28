export default class LeapYear {
    public isLeapYear(year: number): boolean {
        return year % 400 === 0;
    }
}
