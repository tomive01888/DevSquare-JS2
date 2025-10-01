/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */

import { onLogout } from "../auth/logout.mjs";

export function setLogoutListener() {
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", onLogout);
}
