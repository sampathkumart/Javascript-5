const intel = ["hi", "delete", "shift", "tab"];

function alt(intel) {
  return `super ${intel} spider`;
}

const good = intel.map(alt);

console.log(good);

function second(two) {
  return `${two} sharma`;
}

function first(one) {
  return `${one[0].toUpperCase()}${one.slice(1)}`;
}

const smart = ["rohit", "ishant", "rahul"].map(first).map(second);
console.log(smart);

const runs = [46, 15, 79, 12];

const totalRuns = runs.map(total => total * 5);
console.log(totalRuns);
