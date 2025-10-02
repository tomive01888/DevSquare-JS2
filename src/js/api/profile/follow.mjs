import { API_SOCIAL_PROFILES } from "../constants.mjs";
import { headers } from "../headers.mjs";

/**
 * Sends a follow or unfollow request to the API for a given profile name.
 *
 * @async
 * @param {string} name - The name of the profile to follow or unfollow.
 * @param {string} action - The action to perform, either "follow" or "unfollow".
 * @throws {Error} Throws an error if the action is invalid or if the request fails.
 * @returns {Promise<Object>} The response data from the API if the request is successful.
 */
export async function followOrUnfollow(name, action) {
  if (!action || (action.toLowerCase() !== "follow" && action.toLowerCase() !== "unfollow")) {
    throw new Error("Invalid action. Please use 'follow' or 'unfollow'.");
  }

  const fetchUrl = `${API_SOCIAL_PROFILES}/${name}/${action.toLowerCase()}`;

  try {
    const response = await fetch(fetchUrl, {
      method: "PUT",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in followOrUnfollow:", error);
    throw error;
  }
}
