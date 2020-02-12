const name = "virat";
const hi = {
  name,
  age: 40,
  hi: function() {
    return this.age;
  }
};
hi.runs = 12012; //add new property
console.log(hi);

const india = Object.freeze(hi);

console.log(hi.age);

console.log(hi["name"]);
