const hi = ["hello", "good", "bad", "super", "fast", 46, "last"];

function morinig(hi, index, originalArray) {
  //   console.log(hi);

  const nextHi = originalArray[index + 1];
  nextHi ? console.log(nextHi) : null;

  console.log("----");
}
hi.forEach(morinig);

// arrow function
hi.forEach(hi => {
  console.log(hi);
});
