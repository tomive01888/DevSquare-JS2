import { compareUsers } from "../../utilities/compareProfiles.mjs";

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
export function displayPostsListStyle(posts, name) {
  const postContainer = document.getElementById("profile-user-posts");
  postContainer.replaceChildren();

  if (!posts || posts.length === 0) {
    postContainer.textContent = `${name} has not created any posts yet.`;
  }

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add(
      "h-12",
      "relative",
      "rounded-md",
      "p-2",
      "flex",
      "justify-start",
      "items-center",
      "gap-4",
      "bg-white",
      "no-underline",
      "text-black",
      "shadow-lg"
    );

    const postTitle = document.createElement("p");
    postTitle.textContent = post.title;
    postTitle.classList.add("w-full", "max-w-[85%]", "overflow-hidden", "text-ellipsis", "whitespace-nowrap");

    const postBtnWrapper = document.createElement("div");
    postBtnWrapper.classList.add("w-fit", "absolute", "right-4", "flex", "gap-2");

    const goToPost = document.createElement("a");
    goToPost.classList.add("post-icon-base");
    goToPost.textContent = "👁️";
    goToPost.href = `/post/?id=${post.id}`;
    postBtnWrapper.appendChild(goToPost);

    const userToCompare = compareUsers(post.owner);

    if (userToCompare === true) {
      const pencil = document.createElement("i");
      pencil.className = "fas fa-pencil";

      const editBtn = document.createElement("a");
      editBtn.classList.add("post-icon-base");
      editBtn.href = `/post/edit/?id=${post.id}`;
      editBtn.appendChild(pencil);
      postBtnWrapper.appendChild(editBtn);
    }

    postElement.appendChild(postTitle);
    postElement.appendChild(postBtnWrapper);
    postContainer.appendChild(postElement);
  });
}
