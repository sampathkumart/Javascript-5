// setTimeout

function hello() {
  console.log("super");
}
console.log("good");
console.log("evening");
setTimeout(hello, 2000);
console.log("hi");

// setinterval
setInterval(hello, 100);
