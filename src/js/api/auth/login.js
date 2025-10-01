import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

/**
 * Logs in a user with the provided email and password.
 *
 * @param {Object} data - The login data.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<Object>} A promise that resolves to the user's login response.
 * @throws {Error} Error if the login fails.
 */
export async function login({ email, password }) {
  const response = await fetch(API_AUTH_LOGIN, {
    method: "POST",
    headers: headers({ apiKey: false, authToken: false, contentType: true }),
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
  }

  return await response.json();
}
