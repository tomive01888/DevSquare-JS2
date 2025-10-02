import { readPost } from "../js/api/post/read.mjs";
import { createComment } from "../js/ui/component/commentsBuilder.mjs";
import { createPostContent } from "../js/ui/component/singlePostBuilder.mjs";
import { setLogoutListener } from "../js/ui/global/logout.mjs";
import { authGuard } from "../js/utilities/authGuard.mjs";
import { getMainComments } from "../js/utilities/commentsSorter.mjs";
import { goToProfilePage } from "../js/ui/global/goMyProfile.mjs";
import { redirectWithToast } from "../js/ui/component/toastService.mjs";
import { createCommentForm } from "../js/ui/component/commentFormBuilder.mjs";
import "../css/style.css";
document.addEventListener("DOMContentLoaded", () => {
  authGuard();
  setLogoutListener();
  goToProfilePage();

  const urlSearch = new URLSearchParams(window.location.search);
  const idFromParams = urlSearch.get("id");

  initSinglePost(idFromParams);

  async function initSinglePost(id) {
    try {
      const postData = await readPost(id);

      if (!postData || !postData.data) {
        throw new Error("Post does not exist");
      }

      document.title = `${postData.data.title} - DevSquare`;

      createPostContent(postData.data);

      const commentSection = document.getElementById("comment-section");
      commentSection.replaceChildren();
      const commentForm = createCommentForm();
      commentSection.appendChild(commentForm);

      const filteredMainComments = getMainComments(postData.data.comments);
      await createComment(filteredMainComments);
    } catch (error) {
      console.error("Error initializing single post:", error);
      redirectWithToast("/", "This post no longer exists or an error occurred. Redirecting to the homepage.", "error");
    }
  }
});
