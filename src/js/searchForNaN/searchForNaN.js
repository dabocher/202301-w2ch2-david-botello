const searchForNaN = (valueA, valueB) => {
  let valuesToCompare = [];
  let valueToString;
  if (valueA !== "NaN") {
    valueAToString = valueA + "";
  }
  if (valueAToString.includes(NaN)) valuesToCompare.push(valueA);

  let valueBToString;
  if (valueB !== "NaN") {
    valueBToString = valueB + "";
  }
  if (valueBToString.includes(NaN)) valuesToCompare.push(valueBToString);
  return valuesToCompare;
};

export default searchForNaN;
