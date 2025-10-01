import { login } from "../../api/auth/login.mjs";
import { redirectWithToast } from "../component/toastService.mjs";

/**
 * This function should pass data to the login function in api/auth and handle the response
 */
export async function onLogin(event) {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await login({
      email,
      password,
    });

    const { accessToken, ...userData } = data.data;
    localStorage.setItem("token", accessToken);
    localStorage.setItem("adminUser", JSON.stringify(userData));

    redirectWithToast("/", "Welcome! You are logged in.", "success");
  } catch (error) {
    console.error("Login failed:", error);
    const errorContainer = document.querySelector(".error-container");
    errorContainer.classList.remove("hidden");

    const errorMessage = document.querySelector(".error-message");
    errorMessage.textContent = error.message;
  }
}
