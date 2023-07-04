export default class StringCalculator {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public add(): number {
        if (this.value === '') return 0;
        return parseInt(this.value, 10)
    }
}
