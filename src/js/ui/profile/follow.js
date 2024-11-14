/**
 * Updates the follow button state and functionality.
 * Toggles between "Follow" and "Unfollow" based on the current follow state and handles errors.
 *
 * @param {boolean} isFollowing - Current follow state, true if the user is following the profile.
 * @param {string} profileName - The username of the profile being followed or unfollowed.
 */

import { followOrUnfollow } from "../../api/profile/follow";
import { readProfile } from "../../api/profile/read";
import { createProfileLink } from "../component/profileCardsBuilder";

export function updateFollowButton(isFollowing, profileName) {
  const followButton = document.getElementById("follow-button");
  const followMsg = document.getElementById("follow-msg");

  // Set initial button text based on the current following state
  followButton.textContent = isFollowing ? "Unfollow" : "Follow";

  // Event listener for the follow/unfollow action
  followButton.onclick = async () => {
    try {
      const action = isFollowing ? "Unfollow" : "Follow";
      await followOrUnfollow(profileName, action);

      // Toggle following state and update button text
      isFollowing = !isFollowing;
      followButton.textContent = isFollowing ? "Unfollow" : "Follow";

      // Update profile followers list
      const data = await readProfile(profileName);
      const { followers } = data;
      createProfileLink(followers, null, "followers");
    } catch (error) {
      console.error("Error updating follow status:", error);

      followMsg.style.display = "block";
      followMsg.textContent = error;

      // Hide message after 4 seconds
      setTimeout(() => {
        followMsg.style.display = "none";
      }, 4000);
    }
  };
}
