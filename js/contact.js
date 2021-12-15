const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const sentMessage = document.querySelector("#sentMessage");

function validateForm(event) {
  event.preventDefault();

  let formIsValid = true;

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    formIsValid = false;
  }

  if (checkLength(adress.value, 9) === true) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
    formIsValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    formIsValid = false;
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    formIsValid = false;
  }

  if (formIsValid === true) {
    sentMessage.innerHTML = "Message sent";
  } else {
    sentMessage.innerHTML = "";
  }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
