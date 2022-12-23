export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name Must be a String');
    }
    this._name = value;
  }

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length Must be a Number');
    }
    this._length = value;
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(value) {
    value.forEach((item) => {
      if (typeof item !== 'string') {
        throw new TypeError('Students Must be an array of Strings');
      }
    });
    this._students = value;
  }
}
