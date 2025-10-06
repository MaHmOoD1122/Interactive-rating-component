"use strict";

const result = document.querySelector(".result");
const resultBox = document.querySelector(".result-box");
const submitBtn = document.querySelector(".submit-btn");
const scale = document.querySelectorAll(".scale");
const buttons = document.querySelectorAll(".scale-btn");

let selectedValue = null;

scale.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    scale.forEach((btn) => btn.classList.remove("active-box"));
    buttons.forEach((btn) => btn.classList.add("active-btn"));

    btn.classList.toggle("active-box");
    buttons[i].classList.toggle("active-btn");
    selectedValue = btn.textContent;
  });
});

submitBtn.addEventListener("click", function () {
  if (selectedValue) {
    result.textContent = `You selected ${Number(selectedValue)} out of 5`;
    resultBox.classList.remove("hidden");
  } else {
  }
});
