/**
 *
 * @param {string} userToCompare compares logged user against the user profile they are on, to disable certain features.
 * @returns
 */
export function compareUsers(userToCompare) {
  const loggedUser = JSON.parse(localStorage.getItem("adminUser"));

  if (userToCompare !== loggedUser.name) {
    return false;
  } else {
    return true;
  }
}
