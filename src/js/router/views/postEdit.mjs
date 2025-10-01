import { authGuard } from "../../utilities/authGuard.mjs";
import { onUpdatePost } from "../../ui/post/update.mjs";
import { readPost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout.mjs";
import { goToProfilePage } from "../../ui/global/goMyProfile.mjs";
import { onDeletePost } from "../../ui/post/delete.mjs";
import { populateEditForm } from "../../ui/component/populateEditForm.mjs";
import { showToast } from "../../ui/component/toastService.mjs";

authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");

const headTitle = document.getElementById("title-post");
headTitle.textContent = `DevSquare - Editing post ${postId}`;

initEditPost(postId);
async function initEditPost(id) {
  try {
    const postData = await readPost(id);

    if (!postData || !postData.data) {
      throw new Error("Post does not exist");
    }

    await populateEditForm(postData);
  } catch (error) {
    console.error("Error fetching post data:", error);
    showToast("This post no longer exists or an error occurred. Redirecting to the homepage.", "error");
    window.location.href = "/";
  }
}

document.querySelector(".delete-post").addEventListener("click", onDeletePost);
