export default class StringCalculator {
    private readonly userEnteredString: string;

    constructor(value: string) {
        this.userEnteredString = value;
    }

    public add(): number {
        if (this.userEnteredString === '') return 0;

        if (this.userEnteredString.length === 1) return parseInt(this.userEnteredString, 10);

        if (this.userEnteredString.includes('\n')) {
            let valuesToOperate: string[] = [];
            let delimiters: string[] = [];
            const delimiterAndValues: string[] = this.userEnteredString.split('\n');
            const delimiterExtraction: string = delimiterAndValues[0];
            let valuesExtraction: string | any = delimiterAndValues[1];

            if (delimiterExtraction.includes('//')) {
                delimiters = delimiterExtraction.substring(2, delimiterExtraction.length - 1).split(']').map(delimiter => delimiter.replace('[', ''));
                delimiters.forEach(delimiter => {
                    valuesExtraction = valuesExtraction.replaceAll(delimiter, ',')
                })
                valuesToOperate = valuesExtraction.split(',');
                valuesToOperate = valuesToOperate.filter((value: string) => parseInt(value) < 1000);

                const anyValuesAreNegative: boolean = valuesToOperate.every((value: string): boolean => parseInt(value) < 0)
                if (anyValuesAreNegative) {
                    throw new Error(`negatives not allowed, (${valuesToOperate})`);
                }

                return valuesToOperate.map(Number).reduce((a: number, b: number) => a + b, 0);
            }

            return this.userEnteredString.split('\n').map(Number).reduce((a: number, b:number) => a + b, 0)
        }

        if (this.userEnteredString.includes(',')) return this.userEnteredString.split(',').map(Number).reduce((a: number, b:number) => a + b, 0);

        return 0
    }
}
