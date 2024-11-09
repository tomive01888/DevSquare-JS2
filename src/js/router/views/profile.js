import { readProfile } from "../../api/profile/read";
import { authGuard } from "../../utilities/authGuard";
import { goToProfilePage } from "../../utilities/goOwnProfile";

authGuard();
// setLogoutListener();
// goToProfilePage();

const urlSearch = new URLSearchParams(window.location.search);
const profileName = urlSearch.get("profile");

const data = await readProfile(profileName);
// destructured data
const { posts, following, followers, ...generalInfo } = data;
console.log("all other data:", generalInfo);
console.log("posts", posts);
console.log("followers:", followers);
console.log("following:", following);
