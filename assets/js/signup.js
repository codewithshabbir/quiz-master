import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "./firebase.js";

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let genderInputs = document.querySelectorAll('input[name="gender"]');
let submit = document.getElementById("submit");

const showAndHideLoading = (loading) => {
  if (loading) {
    submit.innerHTML = `
        <svg class="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="white" stroke-width="4"></circle>
          <path class="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        Loading...`;
  } else {
    submit.innerHTML = "Sign Up";
  }
};

const fieldsEmpty = () => {
  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  genderInputs.forEach((input) => (input.checked = false));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let genderSelected = document.querySelector('input[name="gender"]:checked');

  if (validateForm(genderSelected)) {
    showAndHideLoading(true);
    console.log(email.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        console.log("Signup successful", userCredential.user);

        try {
          await setDoc(doc(db, "users", userCredential.user.uid), {
            username: username.value,
            email: email.value,
            gender: genderSelected.value,
          });

          Toastify({
            text: "Signup Successful!",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#28a745",
              color: "#ffffff",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "10px 20px",
            },
          }).showToast();
          showAndHideLoading(false);
          fieldsEmpty();
        } catch (error) {
          Toastify({
            text: error.message,
            duration: 4000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "#dc3545",
              color: "#ffffff",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              padding: "10px 20px",
            },
          }).showToast();
        showAndHideLoading(false);
        }
      })
      .catch((error) => {
        showAndHideLoading(false);
        let errorMessage = "Something went wrong!";

        // Firebase error codes mapping
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/email-already-in-use":
            errorMessage = "This email is already registered! Try logging in.";
            break;
          case "auth/network-request-failed":
            errorMessage = "Network error! Check your internet connection.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many attempts! Please try again later.";
            break;
          default:
            errorMessage = error.message;
        }

        Toastify({
          text: errorMessage,
          duration: 4000,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#dc3545",
            color: "#ffffff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            padding: "10px 20px",
          },
        }).showToast();
      });
  }
});

const showError = (input, errorMessage) => {
  const inputGroup = input.parentElement;
  let error = inputGroup.querySelector(".error-message");

  if (!error) {
    error = document.createElement("p");
    error.className = "error-message text-red-500 text-sm mt-1";
    inputGroup.appendChild(error);
  }
  error.textContent = errorMessage;
};

const clearError = (input) => {
  console.log(input);

  const error = input.parentElement.querySelector(".error-message");
  if (error) error.remove();
};

const validateForm = (genderSelected) => {
  let isValid = true;

  clearError(username);
  clearError(email);
  clearError(password);
  clearError(confirmPassword);
  clearError(genderInputs[0].parentElement.parentElement);

  // Username validation
  if (username.value.trim() === "") {
    showError(username, "Username is required.");
    isValid = false;
  } else if (username.value.length < 3) {
    showError(username, "Username must be at least 3 characters long.");
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    showError(email, "Email is required.");
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    showError(email, "Please enter a valid email address.");
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === "") {
    showError(password, "Password is required.");
    isValid = false;
  } else if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters long.");
    isValid = false;
  }

  // Confirm Password validation
  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Confirm Password is required.");
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match.");
    isValid = false;
  }

  // Gender validation
  if (!genderSelected) {
    showError(
      genderInputs[0].parentElement.parentElement,
      "Please select a gender."
    );
    isValid = false;
  }

  return isValid;
};
