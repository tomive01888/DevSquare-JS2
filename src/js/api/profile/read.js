/**
 * Fetches a user's profile data, including their posts, following, and followers.
 *
 * @async
 * @function readProfile
 * @param {string} username - The username of the profile to retrieve.
 * @returns {Promise<Object|undefined>} Resolves with the profile data object if successful.
 *  Returns `undefined` if an error occurs during the fetch.
 *
 * @throws {Error} Throws an error with the server's status code and message if the fetch fails.
 */

import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readProfile(username) {
  const params = new URLSearchParams({ _posts: true, _following: true, _followers: true });
  const fetchUrl = `${API_SOCIAL_PROFILES}/${username}/?${params.toString()}`;

  try {
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch profile", error);
  }
}

export async function readProfiles(limit, page) {}
