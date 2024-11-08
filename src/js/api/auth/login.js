/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} data - The login data.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to the user's login response.
 * @throws {Error} Error if the login fails.
 */

import { API_AUTH_LOGIN } from "../constants";

const API_KEY = "4642c20d-b0b6-45dd-85a2-4e43bf57c602";

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`
      );
    }

    const data = await response.json();

    localStorage.setItem("token", data.data.accessToken);
    localStorage.setItem("apiKey", API_KEY);
    localStorage.setItem("adminUser", JSON.stringify(data.data));

    console.log("Login successful:", data);

    return data;
  } catch (error) {
    throw error;
  }
}
