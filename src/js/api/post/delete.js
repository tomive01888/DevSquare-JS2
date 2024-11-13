import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

/**
 * Sends a DELETE request to the API to remove a post by its ID.
 *
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<void>} - Resolves if deletion is successful; rejects with error otherwise.
 */

export async function deletePost(id) {
  const fetchUrl = `${API_SOCIAL_POSTS}/${id}`;

  try {
    const response = await fetch(fetchUrl, {
      method: "DELETE",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
    });

    if (!response.ok) {
      // Fetch error details only if available
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to delete post.");
    }

    return;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}
