rangeInput = document.querySelectorAll(".range__input input"),
  yearInput = document.querySelectorAll(".year__input input"),
  progress = document.querySelector(".slider .slider__progress");

yearGap = 1;

yearInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two ranges value and parsing them to number
    let minVal = parseInt(yearInput[0].value),
      maxVal = parseInt(yearInput[1].value);

    if ((maxVal - minVal >= yearGap) && maxVal <= 2024) {
      if (e.target.className === "input__min") {
        rangeInput[0].value = minVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";

      } else {
        rangeInput[1].value = maxVal;
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

      }
    } 
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two ranges value and parsing them to number
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < yearGap) {
      if (e.target.className === "range__min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      yearInput[0].value =  minVal; 
      yearInput[1].value =  maxVal; 
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
