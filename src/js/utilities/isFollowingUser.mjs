export function checkFollowingStatus(followers) {
  const user = JSON.parse(localStorage.getItem("adminUser"));
  return followers.some((follower) => follower.name === user.name);
}
