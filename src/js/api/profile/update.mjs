import { API_SOCIAL_PROFILES } from "../constants.mjs";
import { headers } from "../headers.mjs";

/**
 * Updates a user's profile data, including their avatar, banner, and bio information.
 *
 * @async
 * @function updateProfile
 * @param {string} username - The username of the profile to update.
 * @param {Object} profileData - An object containing the fields to update in the profile.
 * @param {Object} [profileData.avatar] - An object containing avatar information.
 * @param {string} [profileData.avatar.url] - The URL of the avatar image.
 * @param {string} [profileData.avatar.alt] - Alternative text for the avatar image.
 * @param {Object} [profileData.banner] - An object containing banner information.
 * @param {string} [profileData.banner.url] - The URL of the banner image.
 * @param {string} [profileData.banner.alt] - Alternative text for the banner image.
 * @param {string} [profileData.bio] - The biography text for the profile.
 * @returns {Promise<Object|undefined>} Resolves with the updated profile data if the request is successful.
 *  Returns `undefined` if an error occurs during the update.
 *
 * @throws {Error} Throws an error with the server's status code and message if the update fails.
 */
export async function updateProfile(username, { avatar, banner, bio }) {
  const fetchUrl = `${API_SOCIAL_PROFILES}/${username}`;

  const requestBody = {};
  if (bio) {
    requestBody.bio = bio;
  }
  if (avatar && (avatar.url || avatar.alt)) {
    requestBody.avatar = {
      url: avatar.url || "",
      alt: avatar.alt || "",
    };
  }
  if (banner && (banner.url || banner.alt)) {
    requestBody.banner = {
      url: banner.url || "",
      alt: banner.alt || "",
    };
  }

  try {
    const response = await fetch(fetchUrl, {
      method: "PUT",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update profile", error);
    throw error;
  }
}
