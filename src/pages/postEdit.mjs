import { readPost } from "../js/api/post/read.mjs";
import { redirectWithToast } from "../js/ui/component/toastService.mjs";
import { goToProfilePage } from "../js/ui/global/goMyProfile.mjs";
import { setLogoutListener } from "../js/ui/global/logout.mjs";
import { authGuard } from "../js/utilities/authGuard.mjs";
import { onUpdatePost } from "../js/ui/post/update.mjs";
import { populateEditForm } from "../js/ui/component/populateEditForm.mjs";
import { onDeletePost } from "../js/ui/post/delete.mjs";
import "../css/style.css";
authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("id");

document.title = `Editing ${postId} - DevSquare`;

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
    redirectWithToast("/", "This post no longer exists or an error occurred. Redirecting to the homepage.", "error");
  }
}

document.querySelector(".delete-post").addEventListener("click", onDeletePost);
