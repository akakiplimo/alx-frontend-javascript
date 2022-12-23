export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (const idx of array) {
    let value = array[idx];
    // eslint-disable-next-line
    array[idx] = appendString + value;
  }

  return array;
}
