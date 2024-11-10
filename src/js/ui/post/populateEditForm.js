export async function populateEditForm(postData) {
  document.forms.editPost.title.value = postData.data.title;
  document.forms.editPost.body.value = postData.data.body;
  document.forms.editPost.mediaUrl.value = postData.data.media.url;
  document.forms.editPost.mediaAlt.value = postData.data.media.alt;
  document.forms.editPost.tags.value = postData.data.tags.join(", ");
}
