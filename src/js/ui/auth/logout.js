/**
 * This function should log the user out by removing aproppriate user data from the browser.
 */

export function onLogout() {
  localStorage.removeItem("adminUser", JSON.stringify(adminUser));
  localStorage.removeItem("token", data.data.accessToken);
}
