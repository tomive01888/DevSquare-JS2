import { displayRestrictedCoverUp } from "../ui/component/restrictedAccess.mjs";
import { redirectWithToast } from "../ui/component/toastService.mjs";

/**
 * Ensures the user is authenticated before allowing access to a page.
 *
 * This function checks if a valid authentication token exists in the browser's
 * local storage. If the token is not present, the user is notified that they must be
 * logged in to view the page and is redirected to the login page.
 */
export function authGuard() {
  const timeout = 2200;
  if (!localStorage.token) {
    displayRestrictedCoverUp();
    setTimeout(() => {
      redirectWithToast(
        "/auth/",
        "Access restricted: You must be logged in to view this page. Registration is required if you don't already have an account.",
        "error"
      );
    }, timeout);
  }
}
