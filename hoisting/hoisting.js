// hoisting
hello();
function hello() {
  console.log("india won the match");
  console.log(cricket(4, 5, 2));
}

function google() {
  console.log("king");
}
google();
// not work
var hello = function cricket(h, i, o) {
  return h * i + o;
};
// workable
function cricket(h, i, o) {
  return h * i + o;
}

// hoisting works only regular function or function declaration
