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
const $oldPass = document.getElementById('old-password');
//new tag
const errorTag = document.createElement('div');
errorTag.classList.add('form__errors');

$authForm?.addEventListener('submit', (e) => {
  if (
    $authForm.getAttribute('data-form') === 'login' &&
    ($username.value.trim() === '' || $pass.value.trim() === '')
  ) {
    e.preventDefault();
    errorTag.textContent = 'Email or password incorrect ';
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
    errorTag.textContent = 'Fields Required ';
    $authContainer.prepend(errorTag);
    return;
  }

  if (
    $authForm.getAttribute('data-form') === 'reset-pass' &&
    ($oldPass.value.trim() === '' ||
      $pass.value.trim() === '' ||
      $confirmPass.value.trim() === '')
  ) {
    e.preventDefault();
    errorTag.textContent = 'You have to complete the fields';
    $authContainer.prepend(errorTag);

    return;
  }

  if (
    $authForm.getAttribute('data-form') === 'send-mail' &&
    $username.value.trim() === ''
  ) {
    e.preventDefault();
    errorTag.textContent = 'Typing your email or username';
    $authContainer.prepend(errorTag);

    return;
  }
});
