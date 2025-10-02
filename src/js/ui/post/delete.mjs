import { deletePost } from "../../api/post/delete.mjs";
import { redirectWithToast, showToast } from "../component/toastService.mjs";

/**
 * Sends request to deletePost with parameter ID.
 */
export function onDeletePost(event) {
  event.preventDefault();

  const postId = new URLSearchParams(window.location.search).get("id");

  if (postId) {
    const deleteThisPost = confirm("Wanna delete this post?");

    if (deleteThisPost) {
      deletePost(postId);
      setTimeout(() => {
        redirectWithToast("/", "Post successfully deleted", "success");
      }, 500);
    } else {
      showToast("Post deletion cancelled", "error");
      return;
    }
  }
}
