//function declarations

//anonymous function
function(name){
    return `hi ${name}`;
}

// function expression

const hello = function(age) {
  return `${age}`;
};

//arrow function

const hi = runs => runs + 465;

const haha = (sixes, fours, catches) => ({
  virat: `${sixes} ${fours} ${catches}`,
  total: 45,
  age: 45
});

// IIFE -> Immediately Invoked Function Expression

(function(name) {
  return `my name is ${name} `;
})("dhoni");

// Methods

const hii = {
  name: "method",
  // method
  india: function() {
    console.log(this.name);
    return "this is object method";
  },
  // Short hand method
  short() {
    return `hi `;
  },
  // arrow function
  arrow: () => {
    console.log("arrow");
  }
};

// callback functions
// click callback

const button = document.querySelector(".Click");

function follow() {
  console.log("good");
}

button.addEventListener("click", function() {
  console.log("great man");
});
