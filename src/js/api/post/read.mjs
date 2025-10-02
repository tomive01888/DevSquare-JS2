import { API_SOCIAL_POSTS } from "../constants.mjs";
import { headers } from "../headers.mjs";

/**
 * Reads a single post by its ID.
 *
 * @param {string|number} id - The ID of the post to read.
 * @returns {Promise<object>} The response data.
 * @throws {Error} If the API request fails.
 */
export async function readPost(id) {
  const params = new URLSearchParams({ _comments: "true", _author: "true" });
  const fetchUrl = `${API_SOCIAL_POSTS}/${id}?${params.toString()}`;

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

    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

/**
 * Reads multiple posts with optional pagination and tagging.
 *
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<Object>} An object containing an array of posts in the `data` field, and information in a `meta` field.
 * @throws {Error} If the API request fails.
 */
export async function readPosts(limit = 12, page = 1) {
  const params = new URLSearchParams({ limit: limit, page: page, _author: "true", _comments: "true" }); // { limit: limit, page: page, _author: "true", _comments: "true", _tag : tag }

  const fetchUrl = `${API_SOCIAL_POSTS}/?${params.toString()}`;

  try {
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const { data, meta } = await response.json();

    return { data: data, meta: meta };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
