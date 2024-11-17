/**
 * Registers a new user with the provided details.
 *
 * @param {Object} data - The registration data.
 * @param {string} data.name - The user's name (required).
 * @param {string} data.email - The user's email address (required).
 * @param {string} data.password - The user's password (required). *
 
 * @returns {Promise<Object>} A promise that resolves to the user's registration response.
 */

import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

export async function register(userData) {
  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers({ apiKey: false, authToken: false, contentType: true }),
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
