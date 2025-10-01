import { setLogoutListener } from "../../ui/global/logout.mjs";
import { onCreatePost } from "../../ui/post/create.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";
import { goToProfilePage } from "../../ui/global/goMyProfile.mjs";

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
