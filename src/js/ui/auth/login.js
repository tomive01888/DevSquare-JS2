/**
 * This function should pass data to the login function in api/auth and handle the response
 */
import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await login({
      email,
      password,
    });
    window.location.href = "/";
    alert("login successfull");
  } catch (error) {
    console.error("Login failed:", error);
    const errorContainer = document.querySelector(".error-container");
    const errorMessage = document.querySelector(".error-message");
    errorContainer.style.display = "block";
    errorMessage.textContent = error.message;
  }
}
