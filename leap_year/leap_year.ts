export default class LeapYear {
    private readonly year: number;

    constructor(year: number) {
        this.year = year;
    }

    public isLeapYear(): boolean {
        return this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)
    }
}
