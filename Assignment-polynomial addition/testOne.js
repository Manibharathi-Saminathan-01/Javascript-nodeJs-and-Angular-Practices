let coefficientsAndExponent = new Array().fill().map(() => Array());
let polynomialOne = [
  [3, 5],
  [4, 1],
  [5, 0],
];
let polynomialTwo = [
  [7, 5],
  [8, 1],
  [2, 0],
];

console.log(polynomialOne[0].length);

for (let i = 0; i < polynomialOne.length; i++) {
  for (let j = 1; j < polynomialTwo[0].length; j++) {
    for (let k = 0; k < polynomialTwo.length; k++) {
      if (polynomialOne[i][j] == polynomialTwo[k][j]) {
        coefficientsAndExponent.push([
          polynomialOne[i][j - 1] + polynomialTwo[i][j - 1],
          polynomialOne[i][j],
        ]);
        break;
      } else if (polynomialOne[i][j] > polynomialTwo[i][j]) {
        coefficientsAndExponent.push([
          polynomialOne[i][j - 1],
          polynomialOne[i][j],
        ]);
      } else {
        coefficientsAndExponent.push([
          polynomialTwo[i][j - 1],
          polynomialTwo[i][j],
        ]);
      }
    }
    break;
  }
}
console.table(coefficientsAndExponent);
