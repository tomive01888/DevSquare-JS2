import { API_KEY } from "./constants";

export function headers({
  apiKey = false,
  authToken = false,
  contentType = false,
} = {}) {
  const headers = new Headers();

  // Conditionally add API key if needed
  if (apiKey && API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  // Conditionally add Authorization token if provided
  if (authToken) {
    const token = localStorage.getItem("token");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
  }

  // Conditionally add Content-Type if specified
  if (contentType) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
