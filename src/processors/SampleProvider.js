// @flow

import {Trade, SampleData} from '../types/trades';

class SampleProvider {
    data: Array<SampleData> = [];

    constructor(){
        this.data.push(
            {
                symbol: 'TEA',
                tradeType: 'common',
                lastDividend: 0,
                parValue: 100
            },
            {
                symbol: 'POP',
                tradeType: 'common',
                lastDividend: 8,
                parValue: 100
            },
            {
                symbol: 'ALE',
                tradeType: 'common',
                lastDividend: 23,
                parValue: 60
            },
            {
                symbol: 'GIN',
                tradeType: 'preferred',
                lastDividend: 8,
                fixedDividend: 0.02,
                parValue: 100
            },
            {
                symbol: 'JOE',
                tradeType: 'common',
                lastDividend: 13,
                parValue: 250
            }
        );
    }

    extractSamplesForTrader(trade: Trade) {

        var recordedSamples = this.data.find(item => item.symbol === trade.symbol);

        if(recordedSamples === undefined) {
            return {
                symbol: trade.symbol,
                fixedDividend: 0.03,
                tradeType: 'preferred',
                parValue: 100
            }
        }

        return recordedSamples;
    }

}

export default SampleProvider;