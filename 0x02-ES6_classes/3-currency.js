export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // code setter
  set code(value) {
    if (typeof value !== 'string') {
      throw TypeError('Code Must be a String');
    }
    this._code = value;
  }

  // code getter
  get code() {
    return this._code;
  }

  // name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Code Must be a String');
    }
    this._name = value;
  }

  // name getter
  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
