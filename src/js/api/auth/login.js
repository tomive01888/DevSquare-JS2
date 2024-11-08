/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} data - The login data.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to the user's login response.
 * @throws {Error} Error if the login fails.
 */

import { API_AUTH_KEY, API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers({ apiKey: false, authToken: false, contentType: true }),
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const data = await response.json();

    localStorage.setItem("token", data.data.accessToken);

    const { accessToken, ...userData } = data.data;
    localStorage.setItem("adminUser", JSON.stringify(userData));

    const apiKey = await getKey("API_KEY");

    localStorage.setItem("apiKey", apiKey.data.key);

    console.log("Login successful:", data);

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Fetches the user's API key, optionally passing the user's name as a parameter.
 *
 * @param {string} [name] - The optional user's name for generating a personalized API key.
 * @returns {Promise<Object>} A promise that resolves to an object containing the API key.
 * @throws {Error} Throws an error if the fetch request fails.
 */

async function getKey(name) {
  const body = name ? { name } : undefined;
  const fetchUrl = API_AUTH_KEY;

  try {
    const response = await fetch(fetchUrl, {
      method: "POST",
      headers: headers({ apiKey: false, authToken: true, contentType: true }),
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const data = await response.json();
    console.log("api value", data);

    return data;
  } catch (error) {
    console.error("Error creating API key:", error);
    throw error;
  }
}
