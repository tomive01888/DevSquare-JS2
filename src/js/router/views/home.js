import { readPosts } from "../../api/post/read";
import { renderPosts } from "../../ui/component/homePostsBuilder";
import { initializePagination } from "../../ui/component/pagination";
import { authGuard } from "../../utilities/authGuard";
import { initializePageParameter } from "../../utilities/initPageParameter";

// authGuard();

const limit = 12;
let currentPage = initializePageParameter();

async function initializeHome() {
  const { data, meta } = await readPosts(limit, currentPage);
  console.log(data);

  renderPosts(data);

  const pageCount = meta.pageCount;
  console.log(pageCount);

  initializePagination(pageCount);
}
initializeHome();
