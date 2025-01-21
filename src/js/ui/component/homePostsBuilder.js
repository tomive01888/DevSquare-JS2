/**
 * @description
 * This function clears the content of the element with ID "posts-container" and
 * appends a new set of post elements. Each post element includes the post's media image,
 * author's avatar and name, comment count, and creation date.
 *
 */

import { timeSinceCreated } from "../../utilities/timeSinceCreated";

export function renderPosts(posts, pageCount) {
  const maxPageLimit = document.querySelectorAll(".max-page");
  maxPageLimit.forEach((element) => {
    element.textContent = `of ${pageCount}`;
  });

  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("a");
    postElement.className =
      "break-inside-avoid max-w-[340px] w-full flex flex-col gap-4 p-4 bg-neutral-100 border border-neutral-300 rounded-lg shadow-lg transition-transform duration-300 ease-in-out mb-12";

    postElement.href = `/post/?post=${post.id}`;

    const imgSrc = post.media && post.media.url ? post.media.url : "";
    const imgAlt = post.media && post.media.alt ? post.media.alt : "";

    const timeAgo = timeSinceCreated(post.created);

    postElement.innerHTML = `
            <h2 class="text-lg font-semibold break-words"> ${post.title} </h2>   
            <div class="rounded-lg">
                <img class="post-img w-full h-full object-cover rounded-lg" 
                src="${imgSrc ? imgSrc : "/images/noroff-logo.png"}" 
                alt="${imgSrc ? imgAlt : "noroff logo"}">
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="profile-user flex items-center gap-2">
                    <img class="avatar w-9 h-9 rounded-full object-cover" 
                    src="${post.author.avatar.url}" 
                    alt="${post.author.avatar.alt}">
                    <p class="font-medium">${post.author.name}</p>
                </div>
                <p id="comments-length" class="flex items-center text-m">
                    <span class="mr-2">💬</span><b>${post.comments.length}</b>
                </p>
            </div>
            <div class="flex justify-between mt-2 text-sm">
                <p class="text-gray-600">${post.created.slice(0, 10)}</p>
                <p class="text-gray-500">${timeAgo}</p>
            </div>
            
        `;

    postsContainer.appendChild(postElement);
  });
}
