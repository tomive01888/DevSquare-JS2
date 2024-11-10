/**
 *
 * @param {object} user send an array of userinfo as param to populate targeted DOM
 */

export function populateProfileInfo(user) {
  document.getElementById("hero-profile").style.backgroundImage = `url(${user.banner.url})`;
  document.getElementById("avatar").src = user.avatar.url;
  document.getElementById("avatar").alt = user.avatar.alt;
  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("bio-text").textContent = user.bio ? user.bio : "User has no bio";

  document.getElementById("followers-count").textContent = `Followers: ${user._count.followers}`;
  document.getElementById("following-count").textContent = `Following: ${user._count.following}`;
  document.getElementById("posts-count").textContent = `Posts: ${user._count.posts}`;
}
