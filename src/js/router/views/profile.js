import { setLogoutListener } from "../../ui/global/logout";
import { goToProfilePage } from "../../ui/global/goMyProfile";
import { initProfilePage } from "../../ui/component/profileActions";
import { authGuard } from "../../utilities/authGuard";

authGuard();
setLogoutListener();
goToProfilePage();

const urlSearch = new URLSearchParams(window.location.search);
const profileName = urlSearch.get("profile");

const headTitle = document.getElementById("headTitle");
headTitle.textContent = `DevSquare - ${profileName}'s page`;

initProfilePage(profileName);
