
/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */

import { onLogout } from './logout';

export function setLogoutListener() {
  const logoutButton = document.getElementById("logout-button");

  if (logoutButton) {
    logoutButton.addEventListener("click", onLogout);
  } else {
    console.warn("Logout button not found.");
  }
}
