import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";
import { populateEditForm } from "../../ui/post/populateEditForm";

authGuard();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

// implement a way to populate DOM with current ID from url params
const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");

const postData = await readPost(postId);
console.log(postData);

await populateEditForm(postData);

const goToUpdatedPost = document.querySelector(".goToPost");
goToUpdatedPost.addEventListener("click", () => (window.location.href = `/post/?post=${postId}`));
