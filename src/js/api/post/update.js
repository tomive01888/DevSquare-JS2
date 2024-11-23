/**
 * Updates an existing post by sending updated data to the API.
 *
 * @param {string|number} id - The ID of the post to update.
 * @param {Object} params - The updated post parameters.
 * @param {string} [params.title] - The updated title of the post.(optional)
 * @param {string} [params.body] - The updated body of the post.(optional)
 * @param {string[]} [params.tags] - Array of updated tags associated with the post.(optional)
 * @param {Object} [params.media] - Updated media object containing URL and alt text.(optional)
 * @param {string} [params.media.url] - The updated URL of the media.
 * @param {string} [params.media.alt] - Updated alt text for the media.
 * @returns {Promise<Object>} The updated post data from the API.
 * @throws {Error} If the API request fails.
 */

import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body, tags, media }) {
  const fetchUrl = `${API_SOCIAL_POSTS}/${id}`;

  const postBody = {
    title,
    body,
  };

  if (tags && tags.length > 0) {
    postBody.tags = tags;
  }

  if (!media || !media.url || media.url.trim() === "") {
    postBody.media = null;
  } else {
    postBody.media = media;
  }

  try {
    const response = await fetch(fetchUrl, {
      method: "PUT",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
      body: JSON.stringify(postBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const data = await response.json();
    return { success: true, data };
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
