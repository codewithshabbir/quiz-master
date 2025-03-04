import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
} from "./firebase.js";

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let genderInputs = document.querySelectorAll('input[name="gender"]');

let signup = document.getElementById("signup");
let signin = document.getElementById("signin");

const showAndHideLoading = (loading, text) => {
  if (loading) {
    const button = text === "signup" ? signup : signin;
    if (button) {
      button.innerHTML = `
      <svg class="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4"></circle>
        <path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      Loading...`;
    }
  } else {
    if (text === "signup" && signup) signup.innerHTML = "Sign Up";
    else if (text === "signin" && signin) signin.innerHTML = "Sign In";
  }
};

const fieldsEmpty = () => {
  if (username) username.value = "";
  if (email) email.value = "";
  if (password) password.value = "";
  if (confirmPassword) confirmPassword.value = "";
  genderInputs.forEach((input) => (input.checked = false));
};

const showError = (input, errorMessage) => {
  if (!input) return;
  const inputGroup = input.parentElement;
  let error = inputGroup?.querySelector(".error-message");

  if (!error) {
    error = document.createElement("p");
    error.className = "error-message text-red-500 text-sm mt-1";
    inputGroup?.appendChild(error);
  }
  error.textContent = errorMessage;
};

const clearError = (input) => {
  if (!input) return;
  const error = input.parentElement?.querySelector(".error-message");
  if (error) error.remove();
};

const validateForm = (isSignup = false) => {
  let isValid = true;

  clearError(username);
  clearError(email);
  clearError(password);
  clearError(confirmPassword);
  if (isSignup) clearError(genderInputs[0]?.parentElement.parentElement);

  // Username validation (only for signup)
  if (isSignup) {
    if (!username?.value.trim()) {
      showError(username, "Username is required.");
      isValid = false;
    } else if (username.value.length < 3) {
      showError(username, "Username must be at least 3 characters long.");
      isValid = false;
    }
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.value.trim()) {
    showError(email, "Email is required.");
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    showError(email, "Please enter a valid email address.");
    isValid = false;
  }

  // Password validation
  if (!password?.value.trim()) {
    showError(password, "Password is required.");
    isValid = false;
  } else if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters long.");
    isValid = false;
  }

  // Confirm Password validation (only for signup)
  if (isSignup) {
    if (!confirmPassword?.value.trim()) {
      showError(confirmPassword, "Confirm Password is required.");
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match.");
      isValid = false;
    }
  }

  // Gender validation (only for signup)
  if (isSignup) {
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
      showError(genderInputs[0]?.parentElement.parentElement, "Please select a gender.");
      isValid = false;
    }
  }

  return isValid;
};

const toastShow = (message, state) => {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: state === "success" ? "#28a745" : "#dc3545",
      color: "#ffffff",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      padding: "10px 20px",
    },
  }).showToast();
};

signup?.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!validateForm(true)) return;

  showAndHideLoading(true, "signup");

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    await setDoc(doc(db, "users", userCredential.user.uid), {
      username: username.value,
      email: email.value,
      gender: document.querySelector('input[name="gender"]:checked').value,
    });

    toastShow("Signup Successful!", "success");
    fieldsEmpty();
    window.location.href = "./../../signin.html";
  } catch (error) {
    let errorMessage = "Something went wrong!";
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "This email is already registered!";
        break;
      case "auth/network-request-failed":
        errorMessage = "Network error! Check your internet connection.";
        break;
      case "auth/too-many-requests":
        errorMessage = "Too many attempts! Try again later.";
        break;
      default:
        errorMessage = error.message;
    }
    toastShow(errorMessage, "error");
  } finally {
    showAndHideLoading(false, "signup");
  }
});

signin?.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!validateForm(false)) return;

  showAndHideLoading(true, "signin");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    toastShow("Signin Successful!", "success");
    localStorage.setItem("uid", userCredential.user.uid);
    fieldsEmpty();
    window.location.href = "./../../index.html";
  } catch (error) {
    let errorMessage = "Something went wrong!";
    switch (error.code) {
      case "auth/invalid-email":
        errorMessage = "Invalid email format!";
        break;
      case "auth/user-not-found":
        errorMessage = "No account found with this email!";
        break;
      case "auth/invalid-credential":
        errorMessage = "Invalid Credential";
        break
      case "auth/wrong-password":
        errorMessage = "Incorrect password!";
        break;
      default:
        errorMessage = error.message;
    }
    toastShow(errorMessage, "error");
  } finally {
    showAndHideLoading(false, "signin");
  }
});
