// this
var morning = {
  name: "this",
  age: 55,
  good: function() {
    console.log(`this is the ${this.name} keyword`);
  }
};
morning.good();

//call
var hi = function(run1, run2, run3, run4) {
  console.log(
    `my name is ${this.name} and ${this.age} years old ${run1} ${run2} ${run3} ${run4}`
  );
};

var hello = {
  name: "javascript",
  age: 150,
  year: 2020
};

var runs = [456, 458, 215, 656];

hi.call(hello, runs[0], runs[1], runs[2], runs[3]);
//apply
hi.apply(hello, runs);
//bind
var redmi = hi.bind(hello, runs);
redmi();

//new
var bioData = function(job, salary, bouns) {
  this.job = job;
  this.salary = salary;
  this.bouns = bouns;
};

var info = new bioData("auditor", 75000, 45000);
console.log(info);
