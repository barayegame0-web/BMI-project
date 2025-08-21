const modal = document.querySelector(".modal-screen");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calculateBtn = document.querySelector(".calculate-button");
const bmiResult = document.querySelector(".result");
const bmiStatus = document.querySelector(".status");
const modalCloseBtn = document.querySelector(".close");
const modalContinueBtn = document.querySelector(".continue");
const closeXBtn = document.querySelector(".close-x-btn");

function calculateBmi() {
  const height = heightInput.value;
  const weight = weightInput.value;

  const bmi = (weight / Math.pow(height, 2)).toFixed(1);

  bmiResult.innerHTML = bmi;
  modal.classList.remove("hidden");

  if (bmi < 18.5) {
    bmiStatus.innerHTML = "کم وزن";
    bmiResult.classList.add("not-bad");
    bmiStatus.classList.add("not-bad");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus.innerHTML = "نرمال";
    bmiResult.classList.add("good");
    bmiStatus.classList.add("good");
  } else {
    bmiStatus.innerHTML = "چاق";
    bmiResult.classList.add("bad");
    bmiStatus.classList.add("bad");
  }
}

function hideModal() {
  modal.classList.add("hidden");

  weightInput.value = "";
  heightInput.value = "";
}

calculateBtn.addEventListener("click", calculateBmi);
modalCloseBtn.addEventListener("click", hideModal);
modalContinueBtn.addEventListener("click", hideModal);
closeXBtn.addEventListener("click", hideModal);
