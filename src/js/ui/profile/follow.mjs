/**
 * Updates the follow button state and functionality.
 * Toggles between "Follow" and "Unfollow" based on the current follow state and handles errors.
 *
 * @param {boolean} isFollowing - Current follow state, true if the user is following the profile.
 * @param {string} profileName - The username of the profile being followed or unfollowed.
 */

import { followOrUnfollow } from "../../api/profile/follow";
import { readProfile } from "../../api/profile/read";
import { createProfileLink } from "../component/profileCardsBuilder.mjs";

export function updateFollowButton(isFollowing, profileName) {
  const followButton = document.getElementById("follow-button");
  const followMsg = document.getElementById("follow-msg");

  followButton.textContent = isFollowing ? "Unfollow" : "Follow";

  followButton.onclick = async () => {
    try {
      const action = isFollowing ? "Unfollow" : "Follow";
      await followOrUnfollow(profileName, action);

      isFollowing = !isFollowing;
      followButton.textContent = isFollowing ? "Unfollow" : "Follow";

      const data = await readProfile(profileName);
      const { followers } = data;
      createProfileLink(followers, null, "followers");
    } catch (error) {
      console.error("Error updating follow status:", error);

      followMsg.style.display = "block";
      followMsg.textContent = error;

      setTimeout(() => {
        followMsg.style.display = "none";
      }, 4000);
    }
  };
}
