import searchForNaN from "./searchForNaN/searchForNaN.js";

const strictEquals = (valueA, valueB) => {
  let checkedValues;
  let result;
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    checkedValues = searchForNaN(valueA, valueB);
    result = Object.is(checkedValues[0], checkedValues[1]);
  } else {
    result = Object.is(valueA, valueB);
  }

  return result;
};

console.log(strictEquals(NaN, NaN));
