let name1 = "hi";
let name2 = "hi";

console.log(name1 === name2);

const hello = {
  age: 46,
  runs: 456
};

const hello2 = {
  age: 46,
  runs: 456,
  price: {
    total: 150,
    discount: 12
  }
};

const hello3 = hello;
hello3.age = 123;
console.log(hello3.age);
console.log(hello.age);
hello.runs = 10000;
console.log(hello.runs);

const hello4 = { ...hello2 };
console.log(hello4);
hello4.age = 1;

hello4.price.discount = 16;

const lenovo = {
  total: 2,
  remain: 1
};

const apple = {
  cost: 70000
};

const merge = { ...lenovo, ...apple };
console.log(merge);
