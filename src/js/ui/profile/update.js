export async function onUpdateProfile(event) {}
import { updateProfile } from "../../api/profile/update";

export async function onUpdateProfile(event) {
  event.preventDefault();

  const username = event.target.username.value.trim();
  const bio = event.target.bio.value.trim();
  const avatarSrc = event.target.avatarSrc.value.trim();
  const avatarAlt = event.target.avatarAlt.value.trim();
  const bannerSrc = event.target.bannerSrc.value.trim();
  const bannerAlt = event.target.bannerAlt.value.trim();

  const profileData = {};

  if (bio) {
    profileData.bio = bio;
  }

  if (avatarSrc || avatarAlt) {
    profileData.avatar = {
      url: avatarSrc || "",
      alt: avatarAlt || "",
    };
  }

  if (bannerSrc || bannerAlt) {
    profileData.banner = {
      url: bannerSrc || "",
      alt: bannerAlt || "",
    };
  }

  if (Object.keys(profileData).length === 0) {
    alert("At least one field must be filled out.");
    return;
  }

  try {
    const result = await updateProfile(username, profileData);
    if (result) {
      alert("You have updated your profile");
      setTimeout(() => {
        location.reload();
      }, 2300);
    }
  } catch (error) {
    console.error("Failed to update profile:", error);
    alert("Failed to update profile. Please check the inputs are valid.");
  }
}

// please input this in /src/js/ui/post/update.js
