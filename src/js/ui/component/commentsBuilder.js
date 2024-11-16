/**
 * Creates and displays comments for a post.
 *
 * @async
 * @function createComment
 * @param {Array} comments - An array of comment objects. Each comment should include `author` (with `avatar.url` and `name`), `body`, and `created`.
 * @returns {void} Returns early with a message if no comments are provided or the array is empty.
 *
 * @description This function dynamically generates and displays comment elements within the "comments-area" section of the DOM.
 * It clears the current content, checks for empty or missing comments, and populates the section with styled elements
 * representing each comment, including the author's profile picture, name, time since creation, and the comment body.
 */

import { timeSinceCreated } from "../../utilities/timeSinceCreated";

export async function createComment(comments) {
  const commentsArea = document.getElementById("comments-area");
  commentsArea.textContent = "";

  if (!comments || comments.length === 0) {
    commentsArea.textContent = "This post has no comments";
    return;
  }

  comments.forEach((comment) => {
    const { author, body } = comment;

    const commentWrapper = document.createElement("div");
    commentWrapper.classList.add("comment-wrapper");

    const profileCommenter = document.createElement("div");
    profileCommenter.classList.add("profile-commenter");

    const img = document.createElement("img");
    img.src = author.avatar.url;
    img.alt = `${author.name}'s profile picture`;

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = author.name;

    const timeAgo = timeSinceCreated(comment.created);
    const timeCreated = document.createElement("p");
    timeCreated.id = "time";
    timeCreated.textContent = timeAgo;

    profileCommenter.appendChild(img);
    profileCommenter.appendChild(nameParagraph);

    const commentParagraph = document.createElement("p");
    commentParagraph.classList.add("comment");
    commentParagraph.innerHTML = body.replace(/\n/g, "<br>");

    commentWrapper.appendChild(profileCommenter);
    commentWrapper.appendChild(commentParagraph);
    commentWrapper.appendChild(timeCreated);

    commentsArea.appendChild(commentWrapper);
  });
}
