// Build numbers 1–75 and shuffle
let numbers = [];
for (let i = 1; i <= 75; i++) numbers.push(i);

numbers.sort(() => Math.random() - 0.5);

let index = 0;
let called = [];

function getLetter(n) {
  if (n <= 15) return "B";
  if (n <= 30) return "I";
  if (n <= 45) return "N";
  if (n <= 60) return "G";
  return "O";
}

function clearHighlights() {
  ["B", "I", "N", "G", "O"].forEach(l =>
    document.getElementById(l).classList.remove("active")
  );
}

function updateHistory() {
  const history = document.getElementById("history");
  history.textContent = called.join(" , ");
}

function callNumber() {
  if (index >= numbers.length) {
    alert("All numbers have been called!");
    return;
  }

  const n = numbers[index++];
  const label = `${getLetter(n)}-${n}`;
  called.push(label);

  document.getElementById("number").textContent = label;

  clearHighlights();
  document.getElementById(getLetter(n)).classList.add("active");

  updateHistory();
}

function undo() {
  if (called.length === 0) return;

  called.pop();
  index--;

  clearHighlights();

  if (called.length === 0) {
    document.getElementById("number").textContent = "—";
    document.getElementById("history").textContent = "";
    return;
  }

  const last = called[called.length - 1];
  document.getElementById("number").textContent = last;

  const letter = last.split("-")[0];
  document.getElementById(letter).classList.add("active");

  updateHistory();
}
