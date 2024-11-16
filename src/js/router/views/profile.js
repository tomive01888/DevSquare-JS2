import { readProfile } from "../../api/profile/read";
import { populateProfileInfo } from "../../ui/component/populateProfilePage";
import { createProfileLink } from "../../ui/component/profileCardsBuilder";
import { displayPostsListStyle } from "../../ui/component/profilePostsBuilder";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../ui/global/goMyProfile";
import { checkFollowingStatus } from "../../utilities/isFollowingUser";
import { updateFollowButton } from "../../ui/profile/follow";
import { compareUsers } from "../../utilities/compareProfiles";
import { handleSectionDisplay } from "../../utilities/profileSectionHandler";
import { createUpdateProfileForm } from "../../ui/component/profileUpdateFormBuilder";
import { onUpdateProfile } from "../../ui/profile/update";

authGuard();
setLogoutListener();
goToProfilePage();

const urlSearch = new URLSearchParams(window.location.search);
const profileName = urlSearch.get("profile");

initProfilePage(profileName);

async function initProfilePage(user) {
  const data = await readProfile(user);
  const { posts, following, followers, ...generalInfo } = data;

  populateProfileInfo(generalInfo);

  const comparingUsers = compareUsers(profileName);
  console.log(comparingUsers);

  if (comparingUsers === true) {
    console.log("Condition met, appending content");
    document.getElementById("follow").classList.toggle("hidden");

    const mainElement = document.getElementById("profile-page");
    const newSection = createUpdateProfileForm();
    mainElement.appendChild(newSection);
  } else {
    document.getElementById("anchor-edit").classList.toggle("hidden");
  }

  const isFollowing = checkFollowingStatus(followers);
  updateFollowButton(isFollowing, generalInfo.name);
  createProfileLink(followers, `${generalInfo.name} currently has no followers`, "followers");
  createProfileLink(following, `${generalInfo.name} is not following anybody currently`, "following");

  handleSectionDisplay(generalInfo.name);

  displayPostsListStyle(posts);

  const form = document.forms.updateProfile;
  form.addEventListener("submit", onUpdateProfile);
}
