import { goToProfilePage } from "../js/ui/global/goMyProfile.mjs";
import { setLogoutListener } from "../js/ui/global/logout.mjs";
import { authGuard } from "../js/utilities/authGuard.mjs";
import { onCreatePost } from "../js/ui/post/create.mjs";
import "../css/style.css";
authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);

const visitNewPost = document.querySelector(".go-to-post");
const resetBtn = document.querySelector(".reset-form");
resetBtn.addEventListener("click", () => {
  const allErrorMessages = document.querySelectorAll(".error-message");
  allErrorMessages.forEach((message) => {
    message.remove();
  });
  visitNewPost.disabled = true;
});

form.addEventListener("change", () => {
  visitNewPost.disabled = true;
});
