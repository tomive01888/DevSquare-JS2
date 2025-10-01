/**
 * Generates HTTP headers for API requests, allowing conditional inclusion of API key,
 * authorization token, and content type.
 *
 * @param {Object} options - An options object to specify which headers to include.
 * @param {boolean} [options.apiKey=false] - Set to `true` to include the API key in the headers.
 * @param {boolean} [options.authToken=false] - Set to `true` to include the Authorization token from localStorage.
 * @param {boolean} [options.contentType=false] - Set to `true` to include "Content-Type: application/json" in the headers.
 * @returns {Headers} A Headers instance with the specified headers included.
 */

import { API_KEY } from "./constants.mjs";

export function headers({ apiKey = false, authToken = false, contentType = false } = {}) {
  const headers = new Headers();

  if (apiKey) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (authToken) {
    const token = (typeof localStorage !== "undefined" && localStorage.getItem("token")) || "token";
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (contentType) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
