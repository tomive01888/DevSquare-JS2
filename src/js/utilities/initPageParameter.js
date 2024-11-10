/**
 * Initializes the page parameter for pagination in the URL.
 *
 * This function checks if the URL contains a "page" parameter. If the "page"
 * parameter is not present, it sets the page to 1 and updates the URL accordingly.
 * If the "page" parameter exists, it retrieves its value and returns it as the current page.
 *
 * @returns {number} The current page number retrieved or set from the URL.
 */

export function initializePageParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage;

  if (!urlParams.has("page")) {
    urlParams.set("page", 1);
    window.history.replaceState({}, "", `${window.location.pathname}?${urlParams}`);
    currentPage = 1;
  } else {
    currentPage = parseInt(urlParams.get("page"), 10);
  }

  return currentPage;
}
