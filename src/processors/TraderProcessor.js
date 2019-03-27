// @flow

import {Traders} from '../types/traders';

class TraderProcessor {
 traders: Traders = [];

 constructor(traders: Traders){
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
  return this.arrangeTraders().map(tradeCollection => {
   const dividendYield = TraderProcessor.calculateDividendYield(7.08, tradeCollection.traders);

   return {
    symbol: tradeCollection.symbol,
    dividendYield,
    peRatio: TraderProcessor.calculatePeRatio(
        dividendYield,
        TraderProcessor.orderTraders(tradeCollection.traders)[0].price
    ),
    geometricMean: TraderProcessor.calculateGeometricMean(tradeCollection.traders),
    volumeWeighted: TraderProcessor.caclcuateVolumeWeightedStockPrice(tradeCollection.traders)
   }
  });
 }

 static calculatePeRatio(dividendYield: number, price: number) {
  return (price/dividendYield).toFixed(2);
 }

 static caclcuateVolumeWeightedStockPrice(collection: Traders) {
  var numerator = 0.0;
  var denominator = 0.0;

  collection.forEach(item => {
   numerator = numerator + (parseFloat(item.price) * parseFloat(item.count));
   denominator = denominator + parseFloat(item.count);
  });

  return (numerator / denominator).toFixed(2);
 }

 static calculateGeometricMean(collection: Traders) {
  var accumulator = 1.0;

  collection.forEach(item => {
   accumulator = accumulator * parseFloat(item.price);
  });

  return Math.pow(accumulator, 1/collection.length).toFixed(2);
 }

 static orderTraders(traders: Traders) {
  return traders.sort((a, b) => {
   return new Date(b.timeStamp) - new Date(a.timeStamp)
  });
 }

 static calculateDividendYield(dividend: number, collection: Traders) {

  const sortedTraders = TraderProcessor.orderTraders(collection);

  return (dividend / parseFloat(sortedTraders[0].price) * 100.00).toFixed(2);
 }
}

export default TraderProcessor;