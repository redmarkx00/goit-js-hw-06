let counterValue = 0;

const valueElement = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");

function updateCounter() {
  valueElement.textContent = counterValue;
}

incrementButton.addEventListener("click", function () {
  counterValue += 1;
  updateCounter();
});

decrementButton.addEventListener("click", function () {
  counterValue -= 1;
  updateCounter();
});

updateCounter();
