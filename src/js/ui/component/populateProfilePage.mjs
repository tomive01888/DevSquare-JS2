/**
 *
 * @param {object} user send an array of userinfo as param to populate targeted DOM
 */
export function populateProfileInfo(user) {
  document.getElementById("bio-text").textContent = user.bio ? user.bio : "User has no bio";
}
