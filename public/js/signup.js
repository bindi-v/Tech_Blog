const signupFormHandler = async function(event) {
  event.preventDefault();

  const unEl = document.querySelector('#un-signup');
  const pwEl = document.querySelector('#pw-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: unEl.value,
      password: pwEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
    

      