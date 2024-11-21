/**
 * This function should pass data to the register function in api/auth and handle the response
 */

import { register } from "../../api/auth/register";

export async function onRegister(event) {
  event.preventDefault();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const password = event.target.password.value.trim();

  let valid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name is required!";
    valid = false;
  } else if (!/^[\w]+$/.test(name)) {
    document.getElementById("nameError").textContent =
      "Invalid username. Only letters, numbers, and the underscore (_) are permitted.";
    valid = false;
  }

  if (!email) {
    document.getElementById("emailError").textContent = "Email is required!";
    valid = false;
  } else if (!/^[\w\-.]+@(stud\.)?noroff\.no$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email adress (noroff.no or stud.noroff.no).";
    valid = false;
  }

  if (!password) {
    document.getElementById("passwordError").textContent = "Password  is required!";
    valid = false;
  } else if (password.length < 8) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
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
    console.log(data);

    const goLogin = confirm(`User, ${data.data.name}, was successfully registered. Do you want to continue to login?`);

    if (goLogin) {
      window.location.href = "/auth/login/";
    }
  } catch (error) {
    console.error("Registration failed:", error);
    const errorContainer = document.querySelector(".error-container");
    const errorMessage = document.querySelector("#error-msg");
    errorContainer.style.display = "block";
    errorMessage.textContent = error.message;
  }
}
