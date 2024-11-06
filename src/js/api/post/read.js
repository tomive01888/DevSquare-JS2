/**
 * Reads a single post by its ID.
 *
 * @param {string|number} id - The ID of the post to read.
 * @returns {Promise<object>} The response data.
 * @throws {Error} If the API request fails.
 */
// export async function readPost(id) {}

import { API_KEY, API_SOCIAL_POSTS, TOKEN } from "../constants";

// const token = localStorage.getItem("token");
// const apiKey = localStorage.getItem("apiKey");

export async function readPost(id) {
  const params = new URLSearchParams({ _comments: "true", _author: "true" });

  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = `${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`;
      console.error("API Error:", errorMessage);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
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
// export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPosts(limit = 12, page = 1, tag) {
  const params = new URLSearchParams({ limit: limit, page: page, _author: "true", _comments: "true" });

  const url = `${API_SOCIAL_POSTS}/?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const { data, meta } = await response.json();

    console.log("backend", meta);

    return { data: data, meta: meta }; // Returns all posts to be paginated
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

/**
 * Reads multiple posts by a specific user with optional pagination and tagging.
 *
 * @param {string} username - The username of the user whose posts to read.
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<object>} Object with data and meta fields.
 * @throws {Error} If the API request fails.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
