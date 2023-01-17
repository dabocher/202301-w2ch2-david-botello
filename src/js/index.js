import searchForNaN from "./searchForNaN/searchForNaN.js";

const strictEquals = (valueA, valueB) => {
  let checkedValues;
  if (valueA !== !NaN) {
    checkedValues = searchForNaN(valueA, valueB);
  }
  const result = Object.is(checkedValues[0], checkedValues[1]);
  return result;
};

console.log(strictEquals(NaN, NaN));
