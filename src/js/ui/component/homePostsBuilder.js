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
    postElement.className = "post-article";
    postElement.href = `/post/?post=${post.id}`;

    const imgSrc = post.media && post.media.url ? post.media.url : "";
    const imgAlt = post.media && post.media.alt ? post.media.alt : "";

    const timeAgo = timeSinceCreated(post.created);

    postElement.innerHTML = `      
            <div class="temp-bg">
                <img class="post-img" 
                src="${imgSrc ? imgSrc : "/images/noroff-logo.png"}" 
                alt="${imgSrc ? imgAlt : "noroff logo"}">
            </div>
            <div class="intel-wrapper">
                <div class="profile-user">
                    <img class="avatar" 
                    src="${post.author.avatar.url}" 
                    alt="${post.author.avatar.alt}">
                    <p><b>${post.author.name}</b></p>
                </div>
                <p id="comments-length"><span>💬</span><b>${post.comments.length}</b></p>                
            </div>
            <div class="post-info">
                <p>${post.created.slice(0, 10)}</p>
                <p class="time-stamp">${timeAgo}</p>
            </div>
            
        `;

    postsContainer.appendChild(postElement);
  });
}
