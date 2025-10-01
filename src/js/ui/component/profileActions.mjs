/**
 * Initializes the profile page by fetching user data, rendering profile information, and setting up interactions.
 *
 * @module ProfilePage
 *
 * @async
 * @function initProfilePage
 *
 * @param {string} user - The identifier for the user whose profile is being viewed.
 *
 * @description
 * This function handles the initialization of the profile page. It fetches user-specific data such as posts, followers, and following.
 * Based on whether the profile belongs to the logged-in user or not, it dynamically updates the UI to display relevant options.
 * It also sets up event listeners for profile update functionality and ensures proper visibility of profile sections.
 *
 * @returns {Promise<void>} - Resolves when the profile page is fully initialized.
 *
 */

import { readProfile } from "../../api/profile/read";
import { compareUsers } from "../../utilities/compareProfiles.mjs";
import { checkFollowingStatus } from "../../utilities/isFollowingUser.mjs";
import { handleSectionDisplay } from "../../utilities/profileSectionHandler.mjs";
import { updateFollowButton } from "../profile/follow.mjs";
import { populateProfileInfo } from "./populateProfilePage.mjs";
import { createProfileLink } from "./profileCardsBuilder.mjs";
import { displayPostsListStyle } from "./profilePostsBuilder.mjs";
import { createUpdateProfileForm } from "./profileUpdateFormBuilder.mjs";
import { onUpdateProfile } from "../profile/update.mjs";

export async function initProfilePage(user) {
  const data = await readProfile(user);
  const { posts, following, followers, ...generalInfo } = data;

  populateProfileInfo(generalInfo);

  const comparingUsers = compareUsers(user);

  if (comparingUsers === true) {
    document.getElementById("follow").classList.toggle("hidden");
    document.getElementById("start-new-post").classList.toggle("hidden");
    const mainElement = document.getElementById("profile-page");
    document.getElementById("anchor-edit").classList.toggle("hidden");
    const newSection = createUpdateProfileForm();
    mainElement.appendChild(newSection);

    const form = document.forms.updateProfile;
    if (form) {
      form.addEventListener("submit", onUpdateProfile);
    } else {
      console.error("Form not found: updateProfile");
    }
  }
  const isFollowing = checkFollowingStatus(followers);
  updateFollowButton(isFollowing, generalInfo.name);
  createProfileLink(followers, `${generalInfo.name} currently has no followers`, "followers");
  createProfileLink(following, `${generalInfo.name} is not following anybody currently`, "following");

  handleSectionDisplay(generalInfo.name);

  displayPostsListStyle(posts, generalInfo.name);
}
