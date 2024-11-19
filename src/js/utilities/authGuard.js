/**
 * Ensures the user is authenticated before allowing access to a page.
 *
 * This function checks if a valid authentication token exists in the browser's
 * local storage. If the token is not present, the user is alerted that they must be
 * logged in to view the page and is redirected to the login page.
 */

import { displayRestrictedCoverUp } from "../ui/component/restrictedAccess";

export function authGuard() {
  if (!localStorage.token) {
    displayRestrictedCoverUp();
    setTimeout(() => {
      alert(
        "Access restricted: You must be logged in to view this page. Registration is required if you don't already have an account."
      );
      window.location.href = "/auth/";
    }, 1200);
  }
}
