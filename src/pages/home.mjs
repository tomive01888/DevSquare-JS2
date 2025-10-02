import { goToPage, initializeHome, nextPage, prevPage } from "../js/ui/component/homeInitAndPaginator.mjs";
import { setLogoutListener } from "../js/ui/global/logout.mjs";
import { authGuard } from "../js/utilities/authGuard";
import { goToProfilePage } from "../js/ui/global/goMyProfile.mjs";
import "../css/style.css";
document.addEventListener("DOMContentLoaded", () => {
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
});
