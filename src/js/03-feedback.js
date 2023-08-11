import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');

const userData = {
  email: '',
  message: '',
};
const savedUserData = JSON.parse(localStorage.getItem('feedback-form-state'));

window.addEventListener('load', onLoad);
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onLoad() {
  if (savedUserData) {
    form.email.value = savedUserData.email;
    form.message.value = savedUserData.message;
  }
}

function onInput() {
  userData.email = form.email.value;
  userData.message = form.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onSubmit(event) {
  if (event.target.nodeName === 'BUTTON') {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    console.log(savedUserData);
  }
}
