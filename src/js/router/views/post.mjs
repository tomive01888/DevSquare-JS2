import { readPost } from "../../api/post/read";
import { createComment } from "../../ui/component/commentsBuilder.mjs";
import { createPostContent } from "../../ui/component/singlePostBuilder";
import { setLogoutListener } from "../../ui/global/logout.mjs";
import { authGuard } from "../../utilities/authGuard";
import { getMainComments } from "../../utilities/commentsSorter";
import { goToProfilePage } from "../../ui/global/goMyProfile.mjs";
import { redirectWithToast } from "../../ui/component/toastService.mjs";
import { createCommentForm } from "../../ui/component/commentFormBuilder.mjs";

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
