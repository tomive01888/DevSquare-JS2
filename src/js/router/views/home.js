import { readPosts } from "../../api/post/read";
import { renderPosts } from "../../ui/component/homePostsBuilder";
import { initializePagination } from "../../ui/component/pagination";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../utilities/goOwnProfile";
import { initializePageParameter } from "../../utilities/initPageParameter";

authGuard();
setLogoutListener();
goToProfilePage();

const limit = 12;
let currentPage = initializePageParameter();

async function initializeHome() {
  const { data, meta } = await readPosts(limit, currentPage);

  renderPosts(data);

  const pageCount = meta.pageCount;

  initializePagination(pageCount);
}
initializeHome();
