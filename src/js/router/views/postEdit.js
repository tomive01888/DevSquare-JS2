import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";

authGuard();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);

/*

// implement a way to populate DOM with current ID from url params
const urlSearch = new URLSearchParams(window.location.search);
const postId = urlSearch.get("post");

const postData = await readPost(postId);
console.log("post data", postData);

document.forms.editPost.title.value = postData.title;
console.log("Use this value to populate edit form!", postId);
 */
