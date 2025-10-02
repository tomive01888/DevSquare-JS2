import { register } from "../../api/auth/register";

/**
 * This function should pass data to the register function in api/auth and handle the response
 */
export async function onRegister(event) {
  event.preventDefault();

  document.querySelectorAll(".error-message").forEach((errorElement) => {
    errorElement.classList.add("hidden");
  });

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const password = event.target.password.value.trim();

  let valid = true;

  const nameError = document.getElementById("nameError");
  if (!name) {
    nameError.textContent = "Name is required!";
    nameError.classList.remove("hidden");
    valid = false;
  } else if (!/^[\w]+$/.test(name)) {
    nameError.textContent = "Invalid username. Only letters, numbers and the underscore (_) are permitted.";
    nameError.classList.remove("hidden");
    valid = false;
  }

  const emailError = document.getElementById("emailError");
  if (!email) {
    emailError.textContent = "Email is required!";
    emailError.classList.remove("hidden");
    valid = false;
  } else if (!/^[\w\-.]+@(stud\.)?noroff\.no$/.test(email)) {
    emailError.textContent = "Please enter a valid email adress (noroff.no or stud.noroff.no).";
    emailError.classList.remove("hidden");
    valid = false;
  }

  const passwordError = document.getElementById("passwordError");
  if (!password) {
    passwordError.textContent = "Password  is required!";
    passwordError.classList.remove("hidden");
    valid = false;
  } else if (password.length < 8) {
    passwordError.classList.remove("hidden");

    passwordError.textContent = "Password must be at least 8 characters long.";
    valid = false;
  }

  if (!valid) {
    return;
  }

  try {
    const data = await register({
      name,
      email,
      password,
    });

    if (!data) {
      throw new Error("Sorry for the inconvenience, couldn't registering new user.");
    }
    const goLogin = confirm(`User, ${data.data.name}, was successfully registered. Do you want to continue to login?`);

    if (goLogin) {
      window.location.href = "/auth/login/";
    }
  } catch (error) {
    console.error("Registration failed:", error);
    const errorContainer = document.querySelector(".error-container");
    const errorMessage = document.getElementById("error-msg");
    errorMessage.classList.remove("hidden");
    errorContainer.classList.remove("hidden");
    errorMessage.textContent = error.message;
  }
}
