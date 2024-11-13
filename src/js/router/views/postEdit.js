import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { goToProfilePage } from "../../ui/global/goMyProfile";
import { onDeletePost } from "../../ui/post/delete";
import { populateEditForm } from "../../ui/component/populateEditForm";

authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");

const postData = await readPost(postId);
await populateEditForm(postData);

document.querySelector(".delete-post").addEventListener("click", onDeletePost);
