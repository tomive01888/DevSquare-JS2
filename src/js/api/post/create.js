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

import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

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
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
