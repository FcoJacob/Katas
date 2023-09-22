import { InvalidUnitSubscriptionException } from "./InvalidUnitSubscriptionException";

export default class SubscriptionPrices {
    constructor() {}

    public getPrice(amount: number): number | InvalidUnitSubscriptionException {
        if (amount === 1) return 299
        return new InvalidUnitSubscriptionException('Number invalid of subscriptions')
    }
}
