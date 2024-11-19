import { setLogoutListener } from "../../ui/global/logout";
import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../ui/global/goMyProfile";

authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);

const visitNewPost = document.querySelector(".go-to-post");
const resetBtn = document.querySelector(".reset-form");
resetBtn.addEventListener("click", () => {
  visitNewPost.disabled = true;
});

form.addEventListener("change", () => {
  visitNewPost.disabled = true;
});
