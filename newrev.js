const calci = (inpuit) => {
  let a = inpuit;
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf[i] % 2 !== 0) {
      a[i] = a[i].split("").reverse().join("");
    } else {
      a[i] = a[i];
      console.log(a[i]);
    }
  }
  return a;
};
console.log(calci(["Rama", "Sita", "Krishna", "Rukmini", "Siva", "Parvathi"]));
