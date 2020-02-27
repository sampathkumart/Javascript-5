const date = new Date("jan 21, 2018");
console.dir(date);
console.log(date.getFullYear());

const score = new Array(15, 46, 89);

function bioData(name, runs, age) {
  this.name = name;
  this.runs = runs;
  this.age = age;
}

const info = new bioData("Dhoni", 12000, 38);
console.log(info);

console.log(info.runs);
