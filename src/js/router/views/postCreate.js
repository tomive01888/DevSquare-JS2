import { setLogoutListener } from "../../ui/global/logout";
import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../utilities/goOwnProfile";

authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);

console.log(onCreatePost.response);

const visitNewPost = document.querySelector(".goToPost");
visitNewPost.id = "visitNewPostBtn";
visitNewPost.disabled = true;
// alert("Successfully created a new post");
