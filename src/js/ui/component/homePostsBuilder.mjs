import { timeSinceCreated } from "../../utilities/timeSinceCreated.mjs";

/**
 * @description
 * This function clears the content of the element with ID "posts-container" and
 * appends a new set of post elements. Each post element includes the post's media image,
 * author's avatar and name, comment count, and creation date.
 *
 */
export function renderPosts(posts, pageCount) {
  const maxPageLimit = document.querySelectorAll(".max-page");
  maxPageLimit.forEach((element) => {
    element.textContent = `of ${pageCount}`;
  });

  const postsContainer = document.getElementById("posts-container");
  postsContainer.replaceChildren();

  posts.forEach((post) => {
    const postElement = document.createElement("a");
    postElement.className =
      "break-inside-avoid max-w-[340px] w-full flex flex-col gap-4 p-4 bg-neutral-300/75 border border-neutral-400 rounded-lg shadow-lg transition-transform duration-300 ease-in-out mb-12";
    postElement.href = `/post/?id=${post.id}`;

    const imgSrc = post.media && post.media.url ? post.media.url : "";
    const imgAlt = post.media && post.media.alt ? post.media.alt : "";

    const timeAgo = timeSinceCreated(post.created);

    const titleEl = document.createElement("h2");
    titleEl.className = "text-lg font-semibold break-words";
    titleEl.textContent = post.title || "";

    const imgWrap = document.createElement("div");
    imgWrap.className = "rounded-lg";

    const imgEl = document.createElement("img");
    imgEl.className = "post-img w-full h-full object-cover rounded-lg";
    imgEl.src = imgSrc ? imgSrc : "/images/noroff-logo.png";
    imgEl.alt = imgSrc ? imgAlt : "noroff logo";

    imgWrap.appendChild(imgEl);

    const profileRow = document.createElement("div");
    profileRow.className = "flex justify-between items-center mt-4";

    const profileUser = document.createElement("div");
    profileUser.className = "profile-user flex items-center gap-2";

    const avatar = document.createElement("img");
    avatar.className = "avatar w-9 h-9 rounded-full object-cover";

    avatar.src = (post.author && post.author.avatar && post.author.avatar.url) || "";
    avatar.alt = (post.author && post.author.avatar && post.author.avatar.alt) || "";

    const authorName = document.createElement("p");
    authorName.className = "font-medium";
    authorName.textContent = (post.author && post.author.name) || "";

    profileUser.appendChild(avatar);
    profileUser.appendChild(authorName);

    const commentsP = document.createElement("p");
    commentsP.className = "comments-length flex items-center text-m";

    const commentEmoji = document.createElement("span");
    commentEmoji.className = "mr-2";
    commentEmoji.textContent = "💬";

    const commentCount = document.createElement("b");
    const commentsLen = Array.isArray(post.comments) ? post.comments.length : 0;
    commentCount.textContent = String(commentsLen);

    commentsP.appendChild(commentEmoji);
    commentsP.appendChild(commentCount);

    profileRow.appendChild(profileUser);
    profileRow.appendChild(commentsP);

    const dateRow = document.createElement("div");
    dateRow.className = "flex justify-between mt-2 text-sm";

    const isoDate = document.createElement("p");
    isoDate.className = "text-gray-600";
    isoDate.textContent = post.created ? post.created.slice(0, 10) : "";

    const timeAgoP = document.createElement("p");
    timeAgoP.className = "text-gray-500";
    timeAgoP.textContent = timeAgo || "";

    dateRow.appendChild(isoDate);
    dateRow.appendChild(timeAgoP);

    postElement.appendChild(titleEl);
    postElement.appendChild(imgWrap);
    postElement.appendChild(profileRow);
    postElement.appendChild(dateRow);

    postsContainer.appendChild(postElement);
  });
}
