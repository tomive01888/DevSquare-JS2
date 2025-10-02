import { authGuard } from "../js/utilities/authGuard.mjs";
import { setLogoutListener } from "../js/ui/global/logout.mjs";
import { initProfilePage } from "../js/ui/component/profileActions.mjs";
import { goToProfilePage } from "../js/ui/global/goMyProfile.mjs";
import "../css/style.css";
import "../js/ui/component/toastService.mjs";

document.addEventListener("DOMContentLoaded", () => {
  authGuard();
  setLogoutListener();
  goToProfilePage();

  const urlSearch = new URLSearchParams(window.location.search);
  const profileName = urlSearch.get("profile");

  document.title = `${profileName}'s page - DevSquare`;

  initProfilePage(profileName);
});
