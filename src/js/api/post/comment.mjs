/**
 * Posts a comment to a specific post by its ID.
 *
 * @async
 * @function commentPost
 * @param {string} id - The ID of the post to comment on.
 * @param {string} comment - The content of the comment to post.
 * @returns {Promise<Object>} The response data from the server.
 * @throws {Error} If the request fails or the response is invalid.
 */

import { API_SOCIAL_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";

export async function commentPost(id, comment) {
  const fetchUrl = `${API_SOCIAL_POSTS}/${id}/comment`;
  const bodyComment = { body: comment, replyToId: null };

  try {
    const response = fetch(fetchUrl, {
      method: "POST",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
      body: JSON.stringify(bodyComment),
    });

    if (!response) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.message}`);
    }

    const data = (await response).json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
