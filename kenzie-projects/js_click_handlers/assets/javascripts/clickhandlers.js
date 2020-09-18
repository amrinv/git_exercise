const colorBox = document.querySelector("#color-box");
// ---- JS for gray button -----
const grayButton = document.querySelector("#gray-button");
grayButton.addEventListener("click", function () {
  colorBox.className = "gray";
});
// ---- JS for Blue Button ----
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
  colorBox.className = "blue";
});
// ---- JS for Pink Button ----
const pinkButton = document.querySelector("#pink-button");
pinkButton.addEventListener("click", function () {
  colorBox.className = "pink";
});
// ---- JS for Counter ----
let count = 0;
let countspan = document.querySelector("#countspan");
const counterButton = document.querySelector("#counter-button");
counterButton.addEventListener("click", function () {
  countspan.style.color = "black";
  count += 1;
  console.log(count);
  countspan.innerHTML = count;

  if (count % 2 === 0) {
    countspan.style.color = "red";
  }
});
// ---- JS for Even or Odd -----
const evenOrOddButton = document.querySelector("#even-or-odd-button");
evenOrOddButton.addEventListener("click", function () {
  if (count === 0) {
    alert("The count is Zero (0)");
  } else if (count % 2 === 0) {
    alert("The count is Even");
  } else {
    alert("The count is Odd");
  }
});
