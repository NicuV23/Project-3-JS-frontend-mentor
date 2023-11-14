const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");
console.log(form)

const date = new Date();
console.log(date)
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (monthInp.value > 12) {
        monthInp.style.borderColor = "red";
        monthInp.parentElement.querySelector("small").innerText = "must be valid month.";
        validator = false;
    } else if (dayInp.value > 31) {
        dayInp.style.borderColor = "red";
        dayInp.parentElement.querySelector("small").innerText =
          "must be valid day.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    const inputDay = parseInt(dayInp.value);
    const inputMonth = parseInt(monthInp.value);
    const inputYear = parseInt(yearInp.value);

    const currentDate = new Date();  // Data curentă
    let currentDay = currentDate.getDate();
    let currentMonth = 1 + currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    if (inputDay > currentDay) {
      currentMonth = currentMonth - 1;
      currentDay = currentDay + months[currentMonth - 1];
    }

    if (inputMonth > currentMonth) {
      currentYear = currentYear - 1;
      currentMonth = currentMonth + 12;
    }

    const d = currentDay - inputDay;
    const m = currentMonth - inputMonth;
    const y = currentYear - inputYear;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}



form.addEventListener("submit", handleSubmit);