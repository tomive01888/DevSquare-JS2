import { readPost } from "../../api/post/read";
import { createPostContent } from "../../ui/component/singlePostBuilder";

const urlSearch = new URLSearchParams(window.location.search);
const idFromParams = urlSearch.get("post");

const postData = await readPost(idFromParams);

console.log("post", postData.data);

createPostContent(postData.data);
