import searchForNaN from "./searchForNaN/searchForNaN";

const strictEquals = (valueA, valueB) => {
  switch (valueA) {
    case NaN:
      const result = searchForNaN(valueA, valueB);
      break;
  }
};

console.log(strictEquals(NaN));
