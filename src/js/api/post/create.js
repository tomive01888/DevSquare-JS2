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
export async function createPost({ title, body, tags, media }) {}
// src/js/api/post.js

export async function createPost({ title, body, tags, media }) {
    try {
      const response = await fetch('https://v2.api.noroff.dev', { // API URL'ini değiştir
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body, tags, media }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }