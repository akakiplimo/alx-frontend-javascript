// eslint-disable-next-line
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // amount getter
  get amount() {
    return this._amount;
  }

  // set amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('Amount should be a number');
    }
    this._amount = value;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // set currency
  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
