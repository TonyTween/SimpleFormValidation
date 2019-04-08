const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const email = document.querySelector('#email');

const form = document.querySelector('#myForm');

form.addEventListener('sumbit', (e) => {
  e.preventDefault();
});

function validateName(e) {
  if(!e.target.value) return;

  return true;
}

function validatePassword() {

}

function validateConfirmPassword() {

}

function validateEmail() {

}

firstName.addEventListener('focusout', validateName.bind(null, firstName));
lastName.addEventListener('focusout', validateName.bind(null, lastName));
password.addEventListener('focusout', validatePassword);
confirmPassword.addEventListener('focusout', validateConfirmPassword);
email.addEventListener('focusout', validateEmail);
