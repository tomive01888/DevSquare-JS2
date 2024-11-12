/**
 * Displays a list of posts in a specified container with options to view or edit each post.
 *
 * @function displayPostsListStyle
 * @description
 * This function dynamically generates and appends post elements to a container element with the ID "profile-user-posts".
 * Each post element includes a title and a link that either allows viewing or editing the post, depending on
 * whether the currently logged-in user matches the profile being viewed. The link redirects the user to
 * the appropriate page when clicked.
 */

export function displayPostsListStyle(posts) {
  const postContainer = document.getElementById("profile-user-posts");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postTitle = document.createElement("p");
    postTitle.textContent = post.title;

    const postBtnWrapper = document.createElement("div");
    postBtnWrapper.classList.add("postBtnWrapper");

    const goToPost = document.createElement("a");
    goToPost.classList.add("viewPost");
    goToPost.textContent = "👁️";
    goToPost.href = `/post/?post=${post.id}`;
    postBtnWrapper.appendChild(goToPost);

    const urlSearch = new URLSearchParams(window.location.search);
    const userToCompare = urlSearch.get("profile");
    const loggedUser = JSON.parse(localStorage.getItem("adminUser"));
    if (loggedUser.name === userToCompare) {
      const editBtn = document.createElement("a");
      editBtn.classList.add("editPost");
      editBtn.textContent = "✏️";
      editBtn.href = `/post/edit/?post=${post.id}`;
      postBtnWrapper.appendChild(editBtn);
    }

    postElement.appendChild(postTitle);
    postElement.appendChild(postBtnWrapper);
    postContainer.appendChild(postElement);
  });
}
