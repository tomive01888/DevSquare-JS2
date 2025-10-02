import { API_SOCIAL_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";

/**
 * Creates a new post by sending the data to the API.
 *
 * @param {Object} data - The post parameters.
 * @param {string} data.title - The title of the post (required).
 * @param {string} [data.body] - The body of the post (optional).
 * @param {string[]} [data.tags] - Array of tags associated with the post (optional).
 * @param {Object} [data.media] - Media object containing URL and alt text (optional).
 * @param {string} [data.media.url] - The URL of the media (optional).
 * @param {string} [data.media.alt] - Alt text for the media (optional).
 * @returns {Promise<Object>} The created post data from the API.
 * @throws {Error} If the API request fails.
 */
// export async function createPost({ title, body, tags, media }) {}
// src/js/api/post.js
export async function createPost({ title, body, tags, media }) {
  const fetchUrl = API_SOCIAL_POSTS;
  try {
    const response = await fetch(fetchUrl, {
      method: "POST",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
      body: JSON.stringify({ title, body, tags, media }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error creating post:", error);

    if (error.errors && error.status && error.statusCode) {
      return {
        success: false,
        status: error.status,
        statusCode: error.statusCode,
        errors: error.errors,
      };
    }

    return {
      success: false,
      status: "Network Error",
      statusCode: 500,
      errors: [{ message: error.message || "An unknown error occurred." }],
    };
  }
}
