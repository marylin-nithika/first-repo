function handleLogin() {

  const email =
    document.getElementById('email').value;

  const password =
    document.getElementById('password').value;

  // Validation
  if (!email || !password) {

    alert('Please fill in all fields.');

    return;
  }

  // Redirect to player page
  window.location.href = 'player.html';
}