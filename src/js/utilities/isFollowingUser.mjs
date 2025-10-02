/**
 * Checks if the current logged-in user is following.
 *
 * @param {Array<{name: string}>} followers - An array of follower objects with a `name` property.
 * @returns {boolean} `true` if the current user is found in the followers array, otherwise `false`.
 */
export function checkFollowingStatus(followers) {
  const user = JSON.parse(localStorage.getItem("adminUser"));
  return followers.some((follower) => follower.name === user.name);
}
