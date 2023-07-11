export default class StringCalculator {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    public add(): number {
        if (this.value === '') return 0;
        if (this.value.length === 1) return parseInt(this.value, 10);
        if (this.value.includes('\n')) {
            let values: string[] = [];
            const lines: string[] = this.value.split('\n');
            if (lines[0].includes('//[')) {
                const delimiter: string = lines[0].split('//[')[1].split(']')[0];
                values = lines[1].split(delimiter);
                const anyValuesAreNegative: boolean = values.every((value: string): boolean => parseInt(value) < 0)
                if (anyValuesAreNegative) {
                    throw new Error(`negatives not allowed, (${values})`);
                }
                return values.map(Number).reduce((a: number, b:number) => a + b, 0);
            }
            return this.value.split('\n').map(Number).reduce((a: number, b:number) => a + b, 0)
        }
        if (this.value.includes(',')) return this.value.split(',').map(Number).reduce((a: number, b:number) => a + b, 0);
        return 0
    }
}
