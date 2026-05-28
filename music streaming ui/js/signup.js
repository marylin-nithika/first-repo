function handleNext() {

  const email =
    document.getElementById('email').value;

  // Validation
  if (!email || !email.includes('@')) {

    alert('Please enter a valid email address.');

    return;
  }

  // Redirect to player page
  window.location.href = 'player.html';
}