document.getElementById("registrationForm").addEventListener("submit", function (r) {
    r.preventDefault(); 
  
    let isValid = true;
  
  // Username validation:
  const username = document.getElementById('username').value.trim();
  const usernameError = document.getElementById('usernameError');
  if (!username) {
    usernameError.textContent = "Username is required.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }
  
    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      document.getElementById("emailError").textContent = "Email is required.";
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    // Mobile number validation: Exactly 10 digits
    const mobile = document.getElementById('mobile').value.trim();
    const mobileError = document.getElementById('mobileError');
    if (!mobile) {
      mobileError.textContent = "Mobile number is required.";
      isValid = false;
    } else if (mobile.length < 10) {
      mobileError.textContent = "Mobile number must be exactly 10 digits.";
      isValid = false;
    } else if (mobile.length > 10) {
      mobileError.textContent = "Mobile number must not exceed 10 digits.";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      mobileError.textContent = "Mobile number must contain only digits.";
      isValid = false;
    } else {
      mobileError.textContent = "";
    }
    // Date validation
    const date = document.getElementById("date").value;
    if (!date) {
      isValid = false;
      document.getElementById("dateError").textContent = "Please select a date.";
    } else {
      document.getElementById("dateError").textContent = "";
    }
  
    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      isValid = false;
      document.getElementById("genderError").textContent = "Please select your gender.";
    } else {
      document.getElementById("genderError").textContent = "";
    }
  
    // Skills validation
    const skills = document.getElementById('input[name="skills"]:checked');
    if (!skills) {
      isValid = false;
      document.getElementById("skillsError").textContent = "Please select a skill.";
    } else {
      document.getElementById("skillsError").textContent = "";
    }
  
    // File validation
    const file = document.getElementById("file").files[0];
    if (!file) {
      isValid = false;
      document.getElementById("fileError").textContent = "Please upload a file.";
    } else {
      document.getElementById("fileError").textContent = "";
    }
  
    // Country validation
    const country = document.getElementById("country").value;
    if (!country) {
      isValid = false;
      document.getElementById("countryError").textContent = "Please select your country.";
    } else {
      document.getElementById("countryError").textContent = "";
    }
  
  // Password validation: Must include uppercase, lowercase, number, and special character
  const password = document.getElementById('password').value.trim();
  const passwordError = document.getElementById('passwordError');
  if (!password) {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (!/[A-Z]/.test(password)) {
    passwordError.textContent = "Password must contain at least one uppercase letter.";
    isValid = false;
  } else if (!/[a-z]/.test(password)) {
    passwordError.textContent = "Password must contain at least one lowercase letter.";
    isValid = false;
  } else if (!/[0-9]/.test(password)) {
    passwordError.textContent = "Password must contain at least one number.";
    isValid = false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    passwordError.textContent = "Password must contain at least one special character.";
    isValid = false;
  } else if (!(
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  )) {
    passwordError.textContent = "Password must include uppercase, lowercase, number, and special character.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

    // Feedback validation
    const feedback = document.getElementById("feedback").value.trim();
    if (feedback.length < 10) {
      isValid = false;
      document.getElementById("feedbackError").textContent = "Message must be at least 10 characters.";
    } else {
      document.getElementById("feedbackError").textContent = "";
    }

    // Terms and conditions validation
    const terms = document.getElementById('terms').checked;
    const termsError = document.getElementById('termsError');
    if (!terms) {
      termsError.textContent = "You must agree to the terms and conditions.";
      isValid = false;
    } else {
      termsError.textContent = "";
    }
  
    // If all fields are valid, show a success message
    if (isValid) {
      alert("Form submitted successfully!");
      this.sumit();
    }
  });
  