let a = [1, 4, 9, 22];
let b = [2, 3, 18, 37];
const add = function (arr1, arr2) {
  let odered1 = [];
  let ordered2 = [];
  let temp;
  lable: for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] > arr2[i]) {
        temp = arr1[i];
        arr1[i] = arr2[i];
        arr2[i] = temp;
      } else {
        continue lable;
      }
      continue lable;
    }
  }
  return arr1.concat(arr2);
};
console.log(add(a, b));
