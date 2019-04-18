// @flow

import TradeProcessor from './TradeProcessor';
import {Trades} from '../types/trades';

describe('trade stock processor', () => {
    it('should extract an array that contain unique symbols', () => {
        const traders: Trades = [
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

    it('should arrange the trades based on Symbol', () => {
        const traders: Trades = [
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

        expect(processor.arrangeTrades()).toEqual(expectedArrangedTraders);
    });

    it('should calculate the dividend yield given trades for preferred trade types', () => {
        const traders: Trades = [
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

        expect(TradeProcessor.calculateDividendYield(
            {
                tradeType: 'preferred',
                fixedDividend: 3,
                parValue: 100
            },
            traders)
        ).toEqual('6.7');
    });

    it('should calculate the dividend yield given trades for common trade types', () => {
        const traders: Trades = [
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

        expect(TradeProcessor.calculateDividendYield(
            {
                tradeType: 'common',
                lastDividend: 12
            },
            traders)
        ).toEqual('0.27');
    });

    it('should calculate the PE/Ratio', () => {
       expect(TradeProcessor.calculatePeRatio(2.7, 45.00)).toEqual('16.67');
    });

    it('should calculate the GeometricMean', () => {
        const traders: Trades = [
            {
                id: '',
                symbol: '',
                price: '10.00',
                count: '10',
                timeStamp: ''
            },
            {
                id: '',
                symbol: '',
                price: '45.00',
                count: '20',
                timeStamp: ''
            }
        ];

       expect(TradeProcessor.calculateGeometricMean(traders)).toEqual('21.21');
    });

    it('should calculate the Volume Weighted Stock Price', () => {
        const traders: Trades = [
            {
                id: '',
                symbol: '',
                price: '10.00',
                count: '10',
                timeStamp: ''
            },
            {
                id: '',
                symbol: '',
                price: '45.00',
                count: '20',
                timeStamp: ''
            }
        ];

       expect(TradeProcessor.caclculateVolumeWeightedStockPrice(traders)).toEqual('33.33');
    });

    it('should return the full stock exchange data', () => {
        const traders: Trades = [
            {
                id: '',
                symbol: 'aaa',
                price: '10.00',
                count: '10',
                timeStamp: 'Wed Mar 28 2019 14:09:24 GMT+0000 (Greenwich Mean Time)'
            },
            {
                id: '',
                symbol: 'bbb',
                price: '45.00',
                count: '20',
                timeStamp: 'Wed Mar 27 2019 14:09:24 GMT+0000 (Greenwich Mean Time)'
            },
            {
                id: '',
                symbol: 'aaa',
                price: '45.00',
                count: '20',
                timeStamp: 'Wed Mar 26 2019 14:09:24 GMT+0000 (Greenwich Mean Time)'
            }
        ];

        const expected = [
            {
                symbol: 'aaa',
                dividendYield: '0.30',
                peRatio: '33.33',
                geometricMean: '21.21',
                volumeWeighted: '33.33'
            },
            {
                symbol: 'bbb',
                dividendYield: '0.067',
                peRatio: '671.64',
                geometricMean: '45.00',
                volumeWeighted: '45.00'
            }
        ];

        const processor = new TradeProcessor(traders);

        expect(processor.calculateStockExchangeParams()).toEqual(expected);

    });
});
