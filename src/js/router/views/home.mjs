import { goToPage, initializeHome, nextPage, prevPage } from "../../ui/component/homeInitAndPaginator.mjs";
import { setLogoutListener } from "../../ui/global/logout.mjs";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../ui/global/goMyProfile.mjs";

authGuard();
setLogoutListener();
goToProfilePage();

initializeHome();

document.querySelectorAll(".next-posts").forEach((button) => {
  button.addEventListener("click", nextPage);
});

document.querySelectorAll(".prev-posts").forEach((button) => {
  button.addEventListener("click", prevPage);
});

document.querySelectorAll(".go-to").forEach((input) => {
  input.addEventListener("change", () => {
    const pageInput = parseInt(input.value, 10);
    goToPage(pageInput);
  });
});
