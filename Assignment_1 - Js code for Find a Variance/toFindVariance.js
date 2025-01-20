// To find variance

const calculateVariance = function (inputArray) {
  // To find the mean value
  const mean =
    inputArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / inputArray.length;

  // To find the variance
  //  cur => x1,x2,x3,x4,x5....
  const squaredValues = inputArray.map(
    (currentValue) => (currentValue - mean) ** 2
  );
  const variance = squaredValues.reduce(
    (accumulator, currentValue, inputArray) => accumulator + currentValue,
    0
  );
  console.log("The Variance of given numbers is :", variance);
};

calculateVariance([22, 34, 23, 434]);
