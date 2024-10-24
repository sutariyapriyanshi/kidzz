// Function to check if passwords match on the registration page
function validatePasswords() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    const errorMessage = document.getElementById("password_error");

    if (password.value !== confirmPassword.value) {
        errorMessage.textContent = "Passwords do not match!";
        confirmPassword.classList.add("error");
        return false;
    } else {
        errorMessage.textContent = "";
        confirmPassword.classList.remove("error");
        return true;
    }
}

// Function to validate phone number (basic validation, you can customize)
function validatePhoneNumber() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{10}$/;
    const phoneError = document.getElementById("phone_error");

    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number!";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

// Function to validate reCAPTCHA
function validateRecaptcha() {
    const captchaResponse = grecaptcha.getResponse();
    const captchaError = document.getElementById("captcha_error");

    if (captchaResponse.length === 0) {
        captchaError.textContent = "Please complete the CAPTCHA!";
        return false;
    } else {
        captchaError.textContent = "";
        return true;
    }
}

// Smooth animation for form inputs
function addInputAnimation() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.parentNode.classList.add("focused");
        });

        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.parentNode.classList.remove("focused");
            }
        });
    });
}

// Show and hide password toggle feature
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm_password");
    const toggleButton = document.getElementById("togglePassword");

    toggleButton.addEventListener("click", function() {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        confirmPasswordField.setAttribute("type", type);
        this.classList.toggle("show");
    });
}

// Form submission handler to validate form inputs
function handleFormSubmit(event) {
    const isPhoneValid = validatePhoneNumber();
    const arePasswordsValid = validatePasswords();
    const isCaptchaValid = validateRecaptcha();

    if (!isPhoneValid || !arePasswordsValid || !isCaptchaValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
}

// Event listeners setup
document.addEventListener("DOMContentLoaded", function() {
    addInputAnimation();
    togglePasswordVisibility();

    const registrationForm = document.querySelector("form");
    if (registrationForm) {
        registrationForm.addEventListener("submit", handleFormSubmit);
    }
});