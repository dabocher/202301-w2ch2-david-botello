const searchForZeros = (valueA, valueB) => {
  let valuesToCompare = [];
  let valueAToString = valueA + "";

  if (valueAToString.includes(-0)) valuesToCompare.push(valueA);

  let valueBToString = valueB + "";

  if (valueBToString.includes(0)) valuesToCompare.push(valueBToString);
  return valuesToCompare;
};

export default searchForZeros;
