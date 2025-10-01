/**
 * Sends request to deletePost with parameter ID.
 */

import { deletePost } from "../../api/post/delete";
import { showToast } from "../component/toastService.mjs";

export function onDeletePost(event) {
  event.preventDefault();

  const postDataId = event.target.getAttribute("data-id");

  if (postDataId) {
    const deleteThisPost = confirm("Wanna delete this post?");

    if (deleteThisPost) {
      deletePost(postDataId);
      window.location.href = "/";
      showToast("Post successfully deleted", "success");
    } else {
      showToast("Post deletion cancelled", "error");
      return;
    }
  }
}
