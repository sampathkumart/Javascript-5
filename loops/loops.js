//for
for (p = 45; p < 55; p++) {
  console.log(p);
}

const names = ["dhoni", "virat", "yuvraj", "aswin"];

for (let k = 0; k < names.length; k++) {
  console.log(names[k]);
}

// for of

const skipper = "rohit";

for (const spell of skipper) {
  console.log(spell);
}

const runs = [45, 42, 8, 13, 88];

for (const players of runs) {
  console.log(players);
}

// for in

for (const players in runs) {
  console.log(players);
}

const data = {
  age: 46,
  name: "dravid",
  runs: 15552
};

for (let final in data) {
  console.log(final);
}

const humanstats = {
  legs: 2,
  hands: 2,
  head: 1,
  eyes: 2,
  mouth: 1
};

function Human(name) {
  this.name = name;
}

Human.prototype = humanstats;

const hello = new Human("jadeja");

for (const props in hello) {
  console.log(props);
}

//while loop
var won = false;
let o = 15;
while (won === false) {
  console.log("you are a winner");
  o++;
  if (o < 25) {
    won = false;
  }
}
