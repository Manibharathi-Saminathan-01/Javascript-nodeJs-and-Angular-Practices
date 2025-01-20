function reverse(word) {
  if (word.length == 1) {
    return word;
  }

  return reverse(word.substring(1, word.length)) + word.substring(0, 1);
}

let inputString = "dasara";
console.log("Reverse of the input string: " + reverse(inputString));

// let str = "dasara";
// console.log(str.substring(1, str.length) + str.substring(0, 1));
