const lenovo = [
  {
    id: 10,
    name: "sachin",
    age: 42
  },
  {
    id: 7,
    name: "dhoni",
    age: 38
  }
];

function player(cric) {
  return cric.id === 7;
}

const cricket = lenovo.find(player);
console.log(cricket);
