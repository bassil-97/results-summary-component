let data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

function makeUL(array) {
  var list = document.createElement("ul");

  for (var i = 0; i < array.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(array[i]));
    list.appendChild(item);
  }

  return list;
}

document.getElementById("category-list__wrapper").appendChild(makeUL(data));
