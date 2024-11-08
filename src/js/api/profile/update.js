import { API_SOCIAL_PROFILES } from "../constants";

export async function updateProfile(username, { avatar, banner, bio }) {
  const token = localStorage.getItem("token");
  const apiKey = localStorage.getItem("apiKey");
  const profileEndpoint = username;

  const requestBody = {};
  if (bio) {
    requestBody.bio = bio;
  }
  if (avatar && (avatar.url || avatar.alt)) {
    requestBody.avatar = {
      url: avatar.url || "",
      alt: avatar.alt || "",
    };
  }
  if (banner && (banner.url || banner.alt)) {
    requestBody.banner = {
      url: banner.url || "",
      alt: banner.alt || "",
    };
  }

  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}/${profileEndpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-KEY": apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update profile", error);
  }
}