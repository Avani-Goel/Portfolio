const roleText = document.getElementById('role');
const roles = ["student", "web developer", "coding enthusiast"];
let currentRoleIndex = 0;

function changeRole() {
  currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  roleText.textContent = `I am a ${roles[currentRoleIndex]}`;
    roleText.style.color = "#6b3c99"; 
  roleText.style.fontWeight = "bold"; 
}

setInterval(changeRole, 2000); 



document.getElementById('submitButton').addEventListener('click', function() {
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  var isValid = true;

  if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
  }

  if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
  } else if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      isValid = false;
  }

  if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required';
      isValid = false;
  }

  if (isValid) {
      console.log('Form submitted successfully!');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  }
});

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}