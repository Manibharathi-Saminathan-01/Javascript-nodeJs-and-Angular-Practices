"use strict";

// This function returns the sorted list
const mergeTwoList = function (list1, list2) {
  for (let index = 0; index < list1.length; index++) {
    for (let index1 = 0; index1 < list2.length; index1++) {
      if (list1[index] > list2[index1]) {
        [list1[index], list2[index1]] = [list2[index1], list1[index]];
      }
    }
  }
  return list1.concat(
    list2.sort((currentElement, nextElement) => currentElement - nextElement)
  );
};

// This is function is used for divided the list
const mergeSort = function (inputvalues) {
  if (inputvalues.length == 1) return inputvalues;

  let firstList = inputvalues.splice(0, inputvalues.length / 2);
  let secondList = inputvalues;

  const dividedListFirst = firstList.sort(
    (currentElement, nextElement) => currentElement - nextElement
  );
  const dividedListSecond = secondList.sort(
    (currentElement, nextElement) => currentElement - nextElement
  );

  return mergeTwoList(dividedListFirst, dividedListSecond);
};

console.log(mergeSort([9, 1, 4, 22, 3, 2, 91, 18, 37]));
