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
