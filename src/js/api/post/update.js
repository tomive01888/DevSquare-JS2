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
export async function updatePost(id, { title, body, tags, media }) {}


const token = localStorage.getItem("token");
const apiKey = localStorage.getItem("apiKey");

export async function updatePost(id, { title, body, tags, media }) {

    const postBody = {
        title,
        body,
    };

    if(tags && tags.length > 0){
        postBody.tags = tags
    }

    if(!media || |media.url || media.url.trim() === "") {
        postBody.media = null

    } else{
        postBody.media = media
    }


    try {
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, { // API URL'ini değiştir
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-KEY": apiKey, 
        },
        body: JSON.stringify(postBody),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.message}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }