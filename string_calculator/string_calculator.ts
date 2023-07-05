export default class StringCalculator {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public add(): number {
        if (this.value === '') return 0;
        if (this.value.length === 1) return parseInt(this.value, 10);
        if (this.value.includes('\n')) {
            const lines = this.value.split('\n');
            if (lines[0].includes('//[')) {
                const delimiter = lines[0].split('//[')[1].split(']')[0];
                return lines[1].split(delimiter).map(Number).reduce((a, b) => a + b, 0);
            }
            return this.value.split('\n').map(Number).reduce((a, b) => a + b, 0)
        }
        if (this.value.includes(',')) return this.value.split(',').map(Number).reduce((a, b) => a + b, 0);
        return 0
    }
}
