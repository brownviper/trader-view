// @flow

import {Trades} from '../types/trades';
import SampleProvider from './SampleProvider';
import type {SampleData} from "../types/trades";

class TradeProcessor {
 trades: Trades = [];

 constructor(trades: Trades){
  this.trades = trades;
 }

 arrangeTrades() {
  return this.getUniqueSymbols().map(symbol => {
   const filtered = this.trades.filter(trade => trade.symbol === symbol);
       return {
        symbol: filtered[0].symbol,
        trades: filtered
       };
  });
 }

 getUniqueSymbols() {
  var uniqueSymbols = [];

  this.trades.map(trade => {
   if (uniqueSymbols.includes(trade.symbol)) return;
   else uniqueSymbols.push(trade.symbol);
  });
  return uniqueSymbols;
 }

 calculateStockExchangeParams() {

  var samples = new SampleProvider();

  return this.arrangeTrades().map(tradeCollection => {
   var knownSample = samples.extractSamplesForTrade(tradeCollection.trades[0]);
   const dividendYield = TradeProcessor.calculateDividendYield(knownSample, tradeCollection.trades);

   return {
    symbol: tradeCollection.symbol,
    dividendYield,
    peRatio: TradeProcessor.calculatePeRatio(
        dividendYield,
        TradeProcessor.orderTrades(tradeCollection.trades)[0].price
    ),
    geometricMean: TradeProcessor.calculateGeometricMean(tradeCollection.trades),
    volumeWeighted: TradeProcessor.caclculateVolumeWeightedStockPrice(tradeCollection.trades)
   }
  });
 }

 static calculatePeRatio(dividendYield: number, price: number) {

  if (dividendYield == 0.0) {
   return '0.0';
  } else {
   return (price / dividendYield).toFixed(2).toString();
  }
 }

 static caclculateVolumeWeightedStockPrice(collection: Trades) {
  var numerator = 0.0;
  var denominator = 0.0;

  collection.forEach(item => {
   numerator = numerator + (parseFloat(item.price) * parseFloat(item.count));
   denominator = denominator + parseFloat(item.count);
  });

  return (numerator / denominator).toFixed(2);
 }

 static calculateGeometricMean(collection: Trades) {
  var accumulator = 1.0;

  collection.forEach(item => {
   accumulator = accumulator * parseFloat(item.price);
  });

  return Math.pow(accumulator, 1/collection.length).toFixed(2);
 }

 static orderTrades(trades: Trades) {
  return trades.sort((a, b) => {
   return new Date(b.timeStamp) - new Date(a.timeStamp)
  });
 }

 static calculateDividendYield(knownSample: SampleData, collection: Trades) {
  const sortedTrades = TradeProcessor.orderTrades(collection);
  const price = parseFloat(sortedTrades[0].price);

  if (knownSample.tradeType === 'common') {
   return (knownSample.lastDividend/price).toFixed(2);
  } else {
   return ((knownSample.fixedDividend * knownSample.parValue)/price).toPrecision(2);
  }
 }
}

export default TradeProcessor;