import { readPost } from "../../api/post/read";
import { createComment } from "../../ui/component/commentsBuilder";
import { createPostContent } from "../../ui/component/singlePostBuilder";
import { setLogoutListener } from "../../ui/global/logout";
import { onCommentPost } from "../../ui/post/comment";
import { authGuard } from "../../utilities/authGuard";
import { getMainComments } from "../../utilities/commentsSorter";
import { goToProfilePage } from "../../utilities/goOwnProfile";

authGuard();
setLogoutListener();
goToProfilePage();

const urlSearch = new URLSearchParams(window.location.search);
const idFromParams = urlSearch.get("post");

const postData = await readPost(idFromParams);

console.log("post", postData.data);

createPostContent(postData.data);

const filteredMainComments = await getMainComments(postData.data.comments);
console.log(filteredMainComments);
createComment(filteredMainComments);

const commentForm = document.forms.comment;
commentForm.addEventListener("submit", onCommentPost);
