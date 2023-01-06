export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  // check if the position is out of range
  if (position > length) throw new Error('Position outside range');
  // set the value in the desired position in the Int8 Typed Array
  dataView.setInt8(position, value);

  return dataView;
}
