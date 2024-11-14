/**
 * Handles posting a comment by extracting data from the event and making an API request.
 * If the comment is posted successfully, the page reloads; otherwise, an error message is shown.
 *
 * @async
 * @function onCommentPost
 * @param {Event} event - The event object from the form submission.
 * @returns {Promise<void>} - Resolves when the function completes.
 */
import { commentPost } from "../../api/profile/comment";

export async function onCommentPost(event) {
  event.preventDefault();

  const comment = event.target.commentBox?.value.trim();
  if (!comment) {
    console.error("No comment provided.");
    alert("Please enter a comment before posting.");
    return;
  }

  const postId = new URLSearchParams(window.location.search).get("post");

  try {
    const response = await commentPost(postId, comment);

    if (response) {
      location.reload();
    } else {
      console.warn("Comment was not posted.");
      alert("Something went wrong. Comment was not posted. Try again!");
    }
  } catch (error) {
    console.error("An error occurred while posting the comment:", error);
    alert("Something went wrong. Please try again later.");
  }
}
