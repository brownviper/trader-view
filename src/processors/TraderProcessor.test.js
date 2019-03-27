// @flow

import TradeProcessor from './TraderProcessor';
import {Traders} from '../types/traders';

describe('trade stock processor', () => {
    it('should extract an array that contain unique symbols', () => {
        const traders: Traders = [
            {
                id: '',
                symbol: 'aaa',
                price: '',
                count: '',
                timeStamp: ''
            },            {
                id: '',
                symbol: 'bbb',
                price: '',
                count: '',
                timeStamp: ''
            },
            {
                id: '',
                symbol: 'aaa',
                price: '',
                count: '',
                timeStamp: ''
            },
            {
                id: '',
                symbol: 'bbb',
                price: '',
                count: '',
                timeStamp: ''
            },

        ];

        const processor: TradeProcessor = new TradeProcessor(traders);

        expect(processor.getUniqueSymbols()).toEqual(['aaa', 'bbb']);
    });

    it('should arrange the traders based on Symbol', () => {
        const traders: Traders = [
            {
                id: '',
                symbol: 'aaa',
                price: '',
                count: '',
                timeStamp: ''
            },            {
                id: '',
                symbol: 'bbb',
                price: '',
                count: '',
                timeStamp: ''
            },
            {
                id: '',
                symbol: 'aaa',
                price: '',
                count: '',
                timeStamp: ''
            },
            {
                id: '',
                symbol: 'bbb',
                price: '',
                count: '',
                timeStamp: ''
            },

        ];

        const processor: TradeProcessor = new TradeProcessor(traders);
        const expectedArrangedTraders = [
            {
                symbol: 'aaa',
                traders: [traders[0], traders[2]]
            },
            {
                symbol: 'bbb',
                traders: [traders[1], traders[3]]
            }
        ];

        expect(processor.arrangeTraders()).toEqual(expectedArrangedTraders);
    });

    it('should calculate the dividend yield given traders and ', () => {
        const traders: Traders = [
            {
                id: '',
                symbol: '',
                price: '10.00',
                count: '',
                timeStamp: 'Wed Mar 27 2019 14:09:24 GMT+0000 (Greenwich Mean Time)'
            },
            {
                id: '',
                symbol: '',
                price: '45.00',
                count: '',
                timeStamp: 'Wed Mar 28 2019 14:09:24 GMT+0000 (Greenwich Mean Time)'
            }
        ];

        expect(TradeProcessor.calculateDividendYield(1.2, traders)).toEqual('2.7');
    });

    it('should calculate the PE/Ratio', () => {
       expect(TradeProcessor.calculatePeRatio(2.7, 45.00)).toEqual('17');
    });

    it('should calculate the GeometricMean', () => {
        const traders: Traders = [
            {
                id: '',
                symbol: '',
                price: '10.00',
                count: '',
                timeStamp: ''
            },
            {
                id: '',
                symbol: '',
                price: '45.00',
                count: '',
                timeStamp: ''
            }
        ];

       expect(TradeProcessor.calculateGeometricMean(traders)).toEqual('21');
    });
});
