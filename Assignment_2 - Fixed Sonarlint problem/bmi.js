const markWeight = 78;
const markheight = 1.69;
const johnWeight = 92;
const johnHeight = 1.88;

let bmiOfMark = markWeight / markheight ** 2;
let bmiOfJohn = johnWeight / johnHeight ** 2;

const checkCondition = function (bmi1, bmi2) {
  if (bmiOfMark > bmiOfJohn) {
    console.log(`The Bmi ${bmiOfMark} is higher than John's Bmi`);
  } else {
    console.log(`The Bmi ${bmiOfJohn} is hihger than mark ! he is 👌`);
  }
};
checkCondition(bmiOfMark, bmiOfJohn);
