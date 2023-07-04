export default class StringCalculator {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public add(): number {
        return parseInt(this.value, 10)
    }
}
