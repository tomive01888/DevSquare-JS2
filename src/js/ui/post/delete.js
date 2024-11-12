/**
 * Sends request to deletePost with parameter ID.
 */

import { deletePost } from "../../api/post/delete";

export function onDeletePost(event) {
  event.preventDefault();

  const postDataId = event.target.getAttribute("data-id");

  if (postDataId) {
    deletePost(postDataId);
  }
}

const deleteBtn = document.querySelector(".delete-post");
deleteBtn.addEventListener("click", onDeletePost);
