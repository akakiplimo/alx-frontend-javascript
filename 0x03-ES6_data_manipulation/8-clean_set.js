export default function cleanSet(set, startString) {
  let text = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const el of set) {
      if (el && el.startsWith(startString)) {
        array.push(el.slice(startString.length));
      }
    }
    text = array.join('-');
  }
  return text;
}
