import { updateProfile } from "../../api/profile/update";

export async function onUpdateProfile(event) {
  event.preventDefault();

  const urlSearch = new URLSearchParams(window.location.search);
  const profileName = urlSearch.get("profile");

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
    const result = await updateProfile(profileName, profileData);
    if (result) {
      alert("You have updated your profile");
      location.reload();
    }
  } catch (error) {
    console.error("Failed to update profile:", error);
    alert("Failed to update profile. Please check the inputs are valid.");
  }
}
