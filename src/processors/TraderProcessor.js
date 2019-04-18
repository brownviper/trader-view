// @flow

import {Trades} from '../types/traders';
import SampleProvider from './SampleProvider';
import type {SampleData} from "../types/traders";

class TraderProcessor {
 traders: Trades = [];

 constructor(traders: Trades){
  this.traders = traders;
 }

 arrangeTraders() {
  return this.getUniqueSymbols().map(symbol => {
   const filtered = this.traders.filter(trader => trader.symbol === symbol);
       return {
        symbol: filtered[0].symbol,
        traders: filtered
       };
  });
 }

 getUniqueSymbols() {
  var uniqueSymbols = [];

  this.traders.map(trader => {
   if (uniqueSymbols.includes(trader.symbol)) return;
   else uniqueSymbols.push(trader.symbol);
  });
  return uniqueSymbols;
 }

 calculateStockExchangeParams() {

  var samples = new SampleProvider();

  return this.arrangeTraders().map(tradeCollection => {
   var knownSample = samples.extractSamplesForTrader(tradeCollection.traders[0]);
   const dividendYield = TraderProcessor.calculateDividendYield(knownSample, tradeCollection.traders);

   return {
    symbol: tradeCollection.symbol,
    dividendYield,
    peRatio: TraderProcessor.calculatePeRatio(
        dividendYield,
        TraderProcessor.orderTraders(tradeCollection.traders)[0].price
    ),
    geometricMean: TraderProcessor.calculateGeometricMean(tradeCollection.traders),
    volumeWeighted: TraderProcessor.caclculateVolumeWeightedStockPrice(tradeCollection.traders)
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

 static orderTraders(traders: Trades) {
  return traders.sort((a, b) => {
   return new Date(b.timeStamp) - new Date(a.timeStamp)
  });
 }

 static calculateDividendYield(knownSample: SampleData, collection: Trades) {
  const sortedTraders = TraderProcessor.orderTraders(collection);
  const price = parseFloat(sortedTraders[0].price);

  if (knownSample.tradeType === 'common') {
   return (knownSample.lastDividend/price).toFixed(2);
  } else {
   return ((knownSample.fixedDividend * knownSample.parValue)/price).toPrecision(2);
  }
 }
}

export default TraderProcessor;