import { describe, expect, it } from '@jest/globals'
import SubscriptionPrices from './SubscriptionPrices';

describe('SubscriptionPrices', () => {
    it('renders without crashing', () => {
        const calculatePrice: SubscriptionPrices = new SubscriptionPrices()

        expect(calculatePrice.getPrice(1)).toBe(299)
    });
})
