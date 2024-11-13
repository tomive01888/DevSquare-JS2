/**
 * Sends request to deletePost with parameter ID.
 */

import { deletePost } from "../../api/post/delete";

const loggedUser = JSON.parse(localStorage.getItem("adminUser"));

export function onDeletePost(event) {
  event.preventDefault();

  const postDataId = event.target.getAttribute("data-id");

  if (postDataId) {
    const deleteThisPost = confirm("Wanna delete this post?");

    if (deleteThisPost) {
      deletePost(postDataId);
      window.location.href = `/profile/?profile=${loggedUser.name}`;
      alert("Post successfully deleted");
    } else {
      alert("Post deletion cancelled");
      return;
    }
  }
}
