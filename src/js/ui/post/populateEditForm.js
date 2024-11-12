/**
 * Populates the edit form fields with the provided post data for editing.
 *
 * This function takes a post data object and sets the values of the edit form fields to match
 * the post's current title, body, media URL, media alt text, and tags. It is used when loading
 * a post into the edit form for modification.
 */

export async function populateEditForm(postData) {
  document.forms.editPost.id.value = postData.data.id;
  document.forms.editPost.title.value = postData.data.title;
  document.forms.editPost.body.value = postData.data.body;
  document.forms.editPost.mediaUrl.value = postData.data.media ? postData.data.media.url : "";
  document.forms.editPost.mediaAlt.value = postData.data.media ? postData.data.media.alt : "";
  document.forms.editPost.tags.value = postData.data.tags ? postData.data.tags.join(", ") : "";

  document.forms.editPost.deletePost.setAttribute("data-id", postData.data.id);
}
