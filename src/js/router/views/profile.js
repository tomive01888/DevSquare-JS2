import { readProfile } from "../../api/profile/read";
import { populateProfileInfo } from "../../ui/component/populateProfileInfo";
import { createProfileLink } from "../../ui/component/profileCardsBuilder";
import { displayPostsListStyle } from "../../ui/component/profilePostsBuilder";
import { setLogoutListener } from "../../ui/global/logout";
import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../utilities/goOwnProfile";

authGuard();
setLogoutListener();
goToProfilePage();

const form = document.forms.updateProfile;
form.addEventListener("submit", onUpdateProfile);

const urlSearch = new URLSearchParams(window.location.search);
const profileName = urlSearch.get("profile");

async function initProfilePage() {
  const data = await readProfile(profileName);
  const { posts, following, followers, ...generalInfo } = data;
  populateProfileInfo(generalInfo);

  const radioButtons = document.querySelectorAll('input[name="section"]');
  const sections = document.querySelectorAll(".content-section");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      sections.forEach((section) => {
        if (section.id === radio.value) {
          section.classList.remove("hidden");
        } else {
          section.classList.add("hidden");
        }
      });
    });
  });

  createProfileLink(followers, `${generalInfo.name} currently has no followers`, "followers");

  createProfileLink(following, `${generalInfo.name} is not following anybody currently`, "following");

  const usersPostTitle = document.getElementById("visit-users-posts");
  usersPostTitle.textContent = `${generalInfo.name}' posts:`;

  displayPostsListStyle(posts);
}
initProfilePage();
