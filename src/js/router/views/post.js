import { readPost } from "../../api/post/read";
import { createPostContent } from "../../ui/component/singlePostBuilder";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../utilities/goOwnProfile";

authGuard();
setLogoutListener();
goToProfilePage();

const urlSearch = new URLSearchParams(window.location.search);
const idFromParams = urlSearch.get("post");

const postData = await readPost(idFromParams);

console.log("post", postData.data);

createPostContent(postData.data);
