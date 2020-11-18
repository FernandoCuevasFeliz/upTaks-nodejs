import '../scss/styles.scss';
// menu
const $btnMenu = document.getElementById('icon-menu');
const $menu = document.getElementById('main-menu');

$btnMenu.addEventListener('click', () =>
  $menu.classList.toggle('menu--active')
);

// forms auth
const $authContainer = document.getElementById('auth-container');
const $authForm = document.getElementById('auth-form');
// campos
const $firstname = document.getElementById('firstname');
const $lastname = document.getElementById('lastname');
const $email = document.getElementById('email');
const $username = document.getElementById('username');
const $pass = document.getElementById('password');
const $confirmPass = document.getElementById('confirm_pass');
//new tag
const errorTag = document.createElement('div');
errorTag.classList.add('form__errors');
errorTag.textContent = 'Email or password incorrect ';

$authForm?.addEventListener('submit', (e) => {
  if (
    $authForm.getAttribute('data-form') === 'login' &&
    ($username.value.trim() === '' || $pass.value.trim() === '')
  ) {
    e.preventDefault();
    $authContainer.prepend(errorTag);

    return;
  }

  if (
    $authForm.getAttribute('data-form') === 'register' &&
    ($firstname.value.trim() === '' ||
      $lastname.value.trim() === '' ||
      $username.value.trim() === '' ||
      $email.value.trim() === '' ||
      $pass.value.trim() === '' ||
      $confirmPass.value.trim() === '')
  ) {
    e.preventDefault();
    $authContainer.prepend(errorTag);
    return;
  }
});
