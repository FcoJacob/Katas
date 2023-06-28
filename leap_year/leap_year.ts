export default class LeapYear {
    public isLeapYear(year: number): boolean {
        let isLeap = false;
        if (year % 400 === 0 || year % 4 === 0) {
            isLeap = true;
        }
        return isLeap;
    }
}
