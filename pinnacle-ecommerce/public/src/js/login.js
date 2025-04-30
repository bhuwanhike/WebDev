// Basic JavaScript for form validation and interaction
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form.credentials');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      // This is just for demonstration - in a real app, you would handle form submission differently
      event.preventDefault();
      
      const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '#ddd';
        }
      });
      
      // Check if passwords match on register page
      if (form.action.includes('/register')) {
        const passwords = form.querySelectorAll('input[type="password"]');
        if (passwords.length >= 2 && passwords[0].value !== passwords[1].value) {
          isValid = false;
          passwords[1].style.borderColor = 'red';
          alert('Passwords do not match!');
        }
      }
      
      if (isValid) {
        // For demonstration purposes only
        alert('Form submitted successfully!');
        // In a real application, you would submit the form to the server
      }
    });
  }
});
