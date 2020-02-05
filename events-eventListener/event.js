const butt = document.querySelector(".butt");
const ball = document.querySelector(".ball");

// butt.addEventListener("click", function() {
//   alert("button blasted");
// });

function hello() {
  console.log("good evening");
}

butt.addEventListener("click", hello);

// arrow function
const hi = () => console.log("hahaha");

ball.addEventListener("click", hi);
