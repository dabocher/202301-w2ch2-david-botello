const searchForNaN = (valueA, valueB) => {
  let valuesToCompare = [];
  let valueAToString = valueA + "";

  if (valueAToString.includes(NaN)) valuesToCompare.push(valueA);

  let valueBToString = valueB + "";

  if (valueBToString.includes(NaN)) valuesToCompare.push(valueBToString);
  return valuesToCompare;
};

export default searchForNaN;
