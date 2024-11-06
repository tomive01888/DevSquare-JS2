import { timeSinceCreated } from "./timeSinceCreated";

export function renderPosts(posts) {
  console.log(posts);

  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("a");
    postElement.className = "post-article";
    postElement.href = `/post/?id-post=${post.id}`;

    const imgSrc = post.media && post.media.url ? post.media.url : "";
    const imgAlt = post.media && post.media.alt ? post.media.alt : "";

    const timeAgo = timeSinceCreated(post.created);

    postElement.innerHTML = `      
            <div class="temp-bg">
                <img id="post-img" src="${imgSrc}" alt="${imgAlt}">
            </div>
            <div class="intel-wrapper">
                <div class="profile-user">
                    <img class="avatar" src="${post.author.avatar.url}" alt="${post.author.avatar.alt}">
                    <p><b>${post.author.name}</b></p>
                </div>
                <p id="comments-length"><span>💬</span><b>${post.comments.length}</b></p>
                <div class="post-info">
                    <p>${post.created.slice(0, 10)}</p>
                    <p class="time-stamp">${timeAgo}</p>
                </div>
            </div>
            
        `;

    postsContainer.appendChild(postElement);
  });
}
