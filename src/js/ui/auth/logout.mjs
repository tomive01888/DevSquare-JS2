/**
 * This function should log the user out by removing aproppriate user data from the browser.
 */
export function onLogout() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "/auth/login/";
}
