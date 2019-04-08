const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const email = document.querySelector('#email');

const form = document.querySelector('#myForm');

form.addEventListener('sumbit', (e) => {
  e.preventDefault();
});
