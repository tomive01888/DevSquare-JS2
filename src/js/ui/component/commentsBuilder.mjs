import { timeSinceCreated } from "../../utilities/timeSinceCreated.mjs";

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
    commentWrapper.classList.add(
      "relative",
      "bg-neutral-100",
      "flex",
      "flex-col",
      "w-full",
      "p-2",
      "border-gray-300",
      "rounded-md",
      "shadow-lg"
    );

    const profileCommenter = document.createElement("div");
    profileCommenter.classList.add("flex", "items-center", "gap-2", "pd-2", "border-gray-300");

    const img = document.createElement("img");
    img.src = author.avatar.url;
    img.alt = `${author.name}'s profile picture`;
    img.classList.add("w-8", "h-8", "object-cover", "rounded");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = author.name;

    const timeAgo = timeSinceCreated(comment.created);
    const timeCreated = document.createElement("p");
    timeCreated.id = "time";
    timeCreated.classList.add("absolute", "top-2", "right-2", "text-sm", "text-gray");
    timeCreated.textContent = timeAgo;

    profileCommenter.appendChild(img);
    profileCommenter.appendChild(nameParagraph);

    const commentParagraph = document.createElement("p");
    commentParagraph.classList.add("mt-2");
    body.split("\n").forEach((line, index) => {
      commentParagraph.appendChild(document.createTextNode(line));
      if (index < body.split("\n").length - 1) {
        commentParagraph.appendChild(document.createElement("br"));
      }
    });

    commentWrapper.appendChild(profileCommenter);
    commentWrapper.appendChild(commentParagraph);
    commentWrapper.appendChild(timeCreated);

    commentsArea.appendChild(commentWrapper);
  });
}
