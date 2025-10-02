import { onLogout } from "../auth/logout.mjs";
/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */
export function setLogoutListener() {
  document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", onLogout);
  });
}
