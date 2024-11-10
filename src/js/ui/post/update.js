/**
 * Passses data to the createPost function in api/post and handles the response
 */

import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
  event.preventDefault();
  const id = event.target.id.value.trim();
  const title = event.target.title.value.trim();
  const body = event.target.body.value.trim();
  const tags = event.target.tags.value ? event.target.tags.value.split(",").map((tag) => tag.trim()) : [];
  const media = event.target.mediaUrl.value
    ? { url: event.target.mediaUrl.value, alt: event.target.mediaAlt.value || "" }
    : null;

  try {
    const response = await updatePost(id, { title, body, tags, media });

    if (response) {
      alert("Successfully updated post");
    } else {
      alert("Something went wrong, failed to update post.");
    }
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
