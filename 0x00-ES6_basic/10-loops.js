export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (const val of array) {
    // eslint-disable-next-line
    array[array.indexOf(val)] = appendString + val;
  }

  return array;
}
