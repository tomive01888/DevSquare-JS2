import { setLogoutListener } from "../../ui/global/logout.mjs";
import { goToProfilePage } from "../../ui/global/goMyProfile.mjs";
import { initProfilePage } from "../../ui/component/profileActions.mjs";
import { authGuard } from "../../utilities/authGuard.mjs";

authGuard();
setLogoutListener();
goToProfilePage();

const urlSearch = new URLSearchParams(window.location.search);
const profileName = urlSearch.get("profile");

const headTitle = document.getElementById("headTitle");
headTitle.textContent = `DevSquare - ${profileName}'s page`;

initProfilePage(profileName);
