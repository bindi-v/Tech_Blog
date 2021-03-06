const loginFormHandler = async function(event) {
    event.preventDefault();
    
  
    const unEl = document.querySelector('#un-login');
    const pwEl = document.querySelector('#pw-login');
   
    const response = await fetch('/api/user/login', {
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
        alert('Failed to login');
      }
    };
    
    document
      .querySelector('#login-form')
      .addEventListener('submit', loginFormHandler);