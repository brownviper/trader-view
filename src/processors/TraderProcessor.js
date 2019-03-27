// @flow

import Traders from '../types/traders';

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

  const res = this.traders.map(trader => {
   if (uniqueSymbols.includes(trader.symbol)) return;
   else uniqueSymbols.push(trader.symbol);
  });
  return uniqueSymbols;
 }

 static calculatePeRatio(dividendYield: number, price: number) {
  return (price/dividendYield).toPrecision(2);
 }

 calculateStockExchangeParams() {
  arrangeTraders().map(tradeCollection => {
   const dividendYield = this.calculateDividendYield(7.08, tradeCollection);
   return {
    symbol: item.symbol,
    dividendYield,
    peRatio: this.calculatePeRatio(dividendYield, parseFloat(tradeCollection.price)),
    geometricMean: 1.0,
    volumeWeighted: 1.0
   }
  });
 }

 static calculateDividendYield(dividend: number, collection: Traders) {

  const sortedTraders = collection.sort((a, b) => {
   return new Date(b.timeStamp) - new Date(a.timeStamp)
  });

  return (dividend / parseFloat(sortedTraders[0].price) * 100.00).toPrecision(2);
 }
}

export default TraderProcessor;