let arr = new Array(3).fill(Array(3).fill());
arr[0][1] = 1;
let a = [3];
let b = new Array(3).fill().map(() => new Array(3).fill());
b[0][2] = 7;
if (b[0][0] == undefined) b[0][0] = 2;
if (b[0][0] == undefined) b[0][1] = 6;
console.log(typeof b);
console.log(typeof 3);
console.log();
console.table(b);

const typeo = function (i, j) {};
