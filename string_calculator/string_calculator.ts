export default class StringCalculator {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public add(): number {
        if (this.value === '') return 0;
        if (this.value.length === 1) return parseInt(this.value, 10);
        if(this.value.includes(',')) return this.value.split(',').map(Number).reduce((a, b) => a + b, 0);
        return 0
    }
}
