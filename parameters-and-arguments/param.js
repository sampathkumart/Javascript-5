// parameters and arguments
function hello(overs, balls) {
  const match = overs * balls;
  return match;
}

const finish = hello(10, 6);
const dhoni = hello(4, 6);
console.log(finish, dhoni);

// function definition

function cricket(result) {
  return ` india ${result} the match`;
}

const hi = cricket("won");
console.log(hi);
