// string
const string = "india, pakistan, china, america, england";

console.log(string.split(","));

console.log(string.split(""));

const cricket = ["ball", "bat", "six", "four"];

// const hi = cricket.pop();
// console.log(hi);

// const first = cricket.shift();
// console.log(first);

// speard
const cric = [...cricket];
console.log(cric);

//splice
// cricket.splice(2);
// console.log(cricket);

// indexOf
const good = cricket.indexOf("six");
console.log(good);

// includes
const wow = cricket.includes("bat");
console.log(wow);

// reverse
console.log(cricket);

const reverse = [...cricket].reverse();
console.log(reverse);
