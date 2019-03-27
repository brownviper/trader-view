// @flow

import Traders from '../types/traders';

class TraderProcessor {
 traders: Traders = [];

 constructor(traders: Traders){
  this.traders = traders;
 }

 calculateDividendYield() {
  return this.traders;
 }
}

export default TraderProcessor;