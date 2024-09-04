
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting

            // Clear previous errors
            const errors = document.querySelectorAll('.error');
            errors.forEach(error => error.textContent = '');

            // Get form values
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            let valid = true;

            // Validate username
            if (username === '') {
                document.getElementById('usernameError').textContent = 'Username is required.';
                valid = false;
            }

            // Validate email
            if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById('emailError').textContent = 'A valid email is required.';
                valid = false;
            }

            // Validate password
            if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
                valid = false;
            }

            // Validate confirm password
            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
                valid = false;
            }

            // If valid, you can submit the form or do further processing
            if (valid) {
                alert('Registration successful!');
                // Here you can use AJAX or fetch API to submit the form data to the server
                // For example: fetch('/register', { method: 'POST', body: new FormData(this) });
            }
        });
    