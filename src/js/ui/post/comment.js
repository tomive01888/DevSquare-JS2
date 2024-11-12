/**
 *
 */

import { commentPost } from "../../api/profile/comment";

export async function onCommentPost(event) {
  event.preventDefault();
  const comment = event.target.commentBox.value.trim();
  console.log("body value", comment);

  const urlSearch = new URLSearchParams(window.location.search);
  const postId = urlSearch.get("post");
  console.log(postId);

  try {
    const response = await commentPost(postId, comment);

    if (response) {
      location.reload();
    } else {
      alert("Sorry for the inconvenience, comment was not posted. Try again!");
    }
  } catch (error) {
    console.error("Something went wrong", error);
  }
}
