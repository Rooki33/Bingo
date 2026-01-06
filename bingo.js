function randomNumbers(min, max, count) {
  const nums = [];
  while (nums.length < count) {
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums;
}

const ranges = [
  [1, 15],
  [16, 30],
  [31, 45],
  [46, 60],
  [61, 75]
];

const card = document.querySelector("#card tbody");

const columns = ranges.map(r => randomNumbers(r[0], r[1], 5));

for (let row = 0; row < 5; row++) {
  const tr = document.createElement("tr");

  for (let col = 0; col < 5; col++) {
    const td = document.createElement("td");

    if (row === 2 && col === 2) {
      td.textContent = "FREE";
      td.classList.add("marked");
    } else {
      td.textContent = columns[col][row];
    }

    td.onclick = () => td.classList.toggle("marked");
    tr.appendChild(td);
  }

  card.appendChild(tr);
}
