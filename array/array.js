// arrays

const teams = ["csk", "mi", "rcb", "rr"];
console.log(teams);
console.log(teams[2]);
console.log(teams.length);
console.log(teams[teams.length - 1]);

// mutation -> do change original data
const runs = [10, 11, 12, 13];

const runsReverse = [...runs].reverse();
console.log(runsReverse);

// Immutable -> they do not change original data
const won = runs.slice(1, 3);
console.log(won);
console.log(runs);

// adding to end
teams.push("kkr");
console.log(teams);

// adding to front
teams.unshift("kxip");
console.log(teams);
const fours = ["srh", ...teams];
console.log(fours);
//adding to middle
const names = ["ramesh", "suresh", "ganesh", "rajesh"];
const other = [...names.slice(0, 2), "dhoni", ...names.slice(2)];
console.log(other);

//splice

const rohit = [12, 48, 46, 54, 57, 96, 87];
console.log(rohit);
rohit.splice(3, 3);
console.log(rohit);
