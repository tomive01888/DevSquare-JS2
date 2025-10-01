import { readPost } from "../../api/post/read";
import { createComment } from "../../ui/component/commentsBuilder.mjs";
import { createPostContent } from "../../ui/component/singlePostBuilder";
import { setLogoutListener } from "../../ui/global/logout.mjs";
import { onCommentPost } from "../../ui/post/comment.mjs";
import { authGuard } from "../../utilities/authGuard";
import { getMainComments } from "../../utilities/commentsSorter";
import { goToProfilePage } from "../../ui/global/goMyProfile.mjs";
import { showToast } from "../../ui/component/toastService.mjs";

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

    createPostContent(postData.data);

    const filteredMainComments = getMainComments(postData.data.comments);
    await createComment(filteredMainComments);
  } catch (error) {
    console.error("Error initializing single post:", error);
    showToast("This post no longer exists or an error occurred. Redirecting to the homepage.", "error");
    window.location.href = "/";
  }
}

const commentForm = document.forms.comment;
commentForm.addEventListener("submit", onCommentPost);
