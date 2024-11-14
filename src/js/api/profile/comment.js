// API FRONT

import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

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
