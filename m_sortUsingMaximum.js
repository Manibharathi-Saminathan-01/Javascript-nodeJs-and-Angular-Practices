const sort = function (inputvalues) {
  // This is termination condition for recursive call
  if (inputvalues.length == 1) return inputvalues;

  // find the index of the maximum value by using findMax function
  let indexOfMaxValue = inputvalues.indexOf(findMax(inputvalues));

  // We can store that maximum element into particular array
  let newDividedList = inputvalues.splice(indexOfMaxValue, 1);

  // Add the two arrays .
  return sort(inputvalues).concat(newDividedList);
};

const findMax = function (inputvalues) {
  let maxElement = inputvalues[0];
  for (let element of inputvalues) {
    if (element > maxElement) {
      maxElement = element;
    }
  }
  return maxElement;
};

console.log(sort([9, 1, 4, 22, 3, 2, 91, 18, 37]));
