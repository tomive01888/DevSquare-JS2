export function initializePagination(pageCount) {
  const prevButtons = document.querySelectorAll(".prev-posts");
  const nextButtons = document.querySelectorAll(".next-posts");
  const inputFields = document.querySelectorAll(".go-to");

  function getCurrentPageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(urlParams.get("page"), 10);
    return isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  }

  let currentPage = getCurrentPageFromURL();

  function updateURLParameter(page) {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);
    window.history.replaceState(null, "", url.toString());
  }

  function updatePaginatorUI() {
    prevButtons.forEach((button) => (button.disabled = currentPage === 1));
    nextButtons.forEach((button) => (button.disabled = currentPage === pageCount));
    inputFields.forEach((input) => (input.value = currentPage));
  }

  function goToPage(page) {
    if (page >= 1 && page <= pageCount) {
      currentPage = page;
      updatePaginatorUI();
      updateURLParameter(page);
      location.reload();
    }
  }

  prevButtons.forEach((button) => button.addEventListener("click", () => goToPage(currentPage - 1)));
  nextButtons.forEach((button) => button.addEventListener("click", () => goToPage(currentPage + 1)));

  inputFields.forEach((input) => {
    input.addEventListener("change", (event) => {
      const page = parseInt(event.target.value, 10);
      if (!isNaN(page)) {
        goToPage(page);
      } else {
        input.value = currentPage;
      }
    });
  });

  updatePaginatorUI();
}
