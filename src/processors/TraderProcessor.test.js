// @flow

import TradeProcessor from './TraderProcessor';
import {Traders} from '../types/traders';

describe('trade stock processor', () => {
    it('should calculate the dividend yield', () => {
        const traders: Traders = [
            {
                id: '',
                symbol: '',
                price: '',
                count: '',
                timeStamp: ''
            }
        ];

        const processor: TradeProcessor = new TradeProcessor(traders);

        expect(processor.calculateDividendYield()).toEqual(traders);
    });
});
