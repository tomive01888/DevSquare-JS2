import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readProfile(username) {
  const params = new URLSearchParams({ _posts: true, _following: true, _followers: true });
  const fetchUrl = `${API_SOCIAL_PROFILES}/${username}/?${params.toString()}`;

  try {
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: headers({ apiKey: true, authToken: true, contentType: true }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`${errorData.statusCode}: ${errorData.status}. ${errorData.errors[0].message}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch profile", error);
  }
}

export async function readProfiles(limit, page) {}
