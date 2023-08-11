import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
let currentData;
const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

if (savedUserData) {
  form.email.value = savedUserData.email;
  form.message.value = savedUserData.message;
}

function onInput() {
  currentData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
}

function onSubmit(event) {
  event.preventDefault();
  console.log(currentData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
