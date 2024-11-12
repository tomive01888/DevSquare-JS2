import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";
import { populateEditForm } from "../../ui/post/populateEditForm";
import { setLogoutListener } from "../../ui/global/logout";
import { goToProfilePage } from "../../utilities/goOwnProfile";
import { onDeletePost } from "../../ui/post/delete";

authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");

const postData = await readPost(postId);

await populateEditForm(postData);

const loggedUser = JSON.parse(localStorage.getItem("adminUser"));

const formDelete = document.querySelector(".delete-post");

formDelete.addEventListener("click", () => {
  const deleteThisPost = confirm("Wanna delete this post?");
  if (deleteThisPost) {
    onDeletePost();
    alert("Post deleted");
    window.location.href = `/profile/?profile=${loggedUser.name}`;
  } else {
    return;
  }
});
