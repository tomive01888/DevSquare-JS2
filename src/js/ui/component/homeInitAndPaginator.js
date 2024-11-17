/**
 * @module pagination
 *
 * Initializes pagination functionality for navigating through pages.
 *
 * @description
 * This module sets up event listeners and UI updates for pagination elements, allowing the user to navigate
 * between pages by clicking "next" and "previous" buttons or by entering a page number in input fields.
 * It also updates the pagination UI to reflect the current page and disables buttons appropriately
 * based on the current page and total page count.
 *
 * Pagination functions:
 * - `initializeHome`: Initializes the homepage with posts and updates the pagination controls.
 * - `nextPage`: Loads the next set of posts without a full page refresh.
 * - `prevPage`: Loads the previous set of posts without a full page refresh.
 * - `goToPage`: Loads posts from a specific page as entered by the user.
 *
 * @function initializeHome
 * @description
 * Fetches and displays posts for the current page and updates pagination controls.
 * This function calls the `updatePaginationControls` function to adjust the UI based on current pagination state.
 *
 */

import { readPosts } from "../../api/post/read";
import { renderPosts } from "./homePostsBuilder";

let currentPage = 1;
const limit = 12;
let metaData = null;

export async function initializeHome() {
  try {
    const { data, meta } = await readPosts(limit, currentPage);

    if (!data && !meta) {
      throw new Error("Posts from API was not found. Try again some other time");
    }

    metaData = meta;

    renderPosts(data);

    updatePaginationControls();
  } catch (error) {
    console.error("Something went wrong.", error);
    alert("Something went wrong");
  }
}

function updatePaginationControls() {
  currentPage = metaData.currentPage;

  document.querySelectorAll(".prev-posts").forEach((button) => {
    button.disabled = metaData.isFirstPage;
  });
  document.querySelectorAll(".next-posts").forEach((button) => {
    button.disabled = metaData.isLastPage;
  });

  document.querySelectorAll(".go-to").forEach((input) => {
    input.value = currentPage;
  });

  document.querySelectorAll(".max-page").forEach((el) => {
    el.textContent = `of ${metaData.pageCount}`;
  });
}

export async function nextPage() {
  if (!metaData.isLastPage) {
    currentPage += 1;
    await initializeHome();
  }
}

export async function prevPage() {
  if (!metaData.isFirstPage) {
    currentPage -= 1;
    await initializeHome();
  }
}

export async function goToPage() {
  const inputPage = parseInt(document.querySelector(".go-to").value, 10);

  if (isNaN(inputPage) || inputPage < 1 || inputPage > metaData.pageCount) {
    alert("You have ventured too far. Taking you back to page 1.");
    currentPage = 1;
  } else {
    currentPage = inputPage;
  }
  await initializeHome();
}
