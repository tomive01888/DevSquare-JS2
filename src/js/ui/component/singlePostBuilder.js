/**
 * Creates and returns HTML elements to display post content including title, image, body, author, tags, and timestamps.
 *
 * @param {Object} post - The post data object containing details to display.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The main content/body of the post.
 * @param {string[]} [post.tags] - An optional array of tags associated with the post.
 * @param {string} post.media - The URL of the main image for the post.
 * @param {Object} post.author - The author data object for the post.
 * @param {string} post.author.username - The username of the post's author.
 * @param {string} post.author.avatar - The avatar URL of the post's author.
 * @param {string} post.created - The creation timestamp of the post.
 * @returns {HTMLElement} A section element containing the structured post content.
 */

import { timeSinceCreated } from "./timeSinceCreated";

export function createPostContent(post) {
  const { id, title, body, media, author, tags, created } = post;

  const timeSince = timeSinceCreated(created);

  const postContainer = document.getElementById("post-container");

  const postSection = document.createElement("section");
  postSection.id = "post-content";

  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  const postImg = document.createElement("img");
  postImg.id = "postImg";
  postImg.src = media ? media.url : "";
  postImg.alt = media ? media.alt : "";

  const bodyDiv = document.createElement("div");
  const bodyParagraph = document.createElement("p");
  bodyParagraph.textContent = body;
  bodyDiv.appendChild(bodyParagraph);

  const tagsElement = document.createElement("p");
  tagsElement.innerHTML = `Tags: <b> ${tags.length > 0 ? tags.join(", ") : "No tags available"}</b>`;

  const createdElement = document.createElement("p");
  createdElement.innerHTML = `Created: <b> ${created.slice(0, 10)}</b>`;

  const timeSinceElement = document.createElement("p");
  timeSinceElement.innerHTML = `Time ago: <b>${timeSince} </b>`;

  postSection.appendChild(titleElement);
  postSection.appendChild(postImg);
  postSection.appendChild(bodyDiv);
  postSection.appendChild(tagsElement);
  postSection.appendChild(createdElement);
  postSection.appendChild(timeSinceElement);

  // Section 2 - Author and Post Metadata
  const authorSection = document.createElement("section");
  authorSection.id = "author-section";

  const authorLink = document.createElement("a");
  authorLink.classList.add("authorLink");
  authorLink.href = `/profile/?profile=${author.name}`;

  const authorAvatar = document.createElement("img");
  authorAvatar.id = "pr-avatar";
  authorAvatar.src = author.avatar.url;
  authorAvatar.alt = `${author.name}'s avatar`;

  const authorNameElement = document.createElement("p");
  authorNameElement.textContent = author.name;

  const editBtn = document.createElement("a");
  editBtn.href = `/post/edit/?post=${id}`;
  editBtn.textContent = "Edit post";

  authorLink.appendChild(authorAvatar);
  authorLink.appendChild(authorNameElement);

  // Append all to authorSection
  authorSection.appendChild(authorLink);
  authorSection.appendChild(editBtn);

  // Append both sections to main container
  postContainer.appendChild(postSection);
  postContainer.appendChild(authorSection);

  return;
}
