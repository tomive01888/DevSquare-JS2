/**
 * Renders and structures HTML elements to display a post's content including title, body, image, author details, tags, and timestamps.
 *
 * This function creates a structured section of HTML to display key details of a given post, such as title, body, main image,
 * author information, and timestamps, and appends them to the "post-container" element in the DOM.
 * Additionally, it includes "Edit" and "Delete" buttons for the post, which are conditionally displayed
 * based on whether the logged-in user is the post author.
 *
 * @param {Object} post - The data object containing the post details to be displayed.
 */

import { timeSinceCreated } from "./timeSinceCreated";

export function createPostContent(post) {
  const { id, title, body, media, author, tags, created } = post;

  // upper half
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

  // Lower half
  const authorSection = document.createElement("section");
  authorSection.id = "author-section";

  const authorLink = document.createElement("a");
  authorLink.classList.add("authorLink");
  authorLink.href = `/profile/?profile=${author.name}`;

  const authorAvatar = document.createElement("img");
  authorAvatar.id = "profile-avatar";
  authorAvatar.src = author.avatar.url;
  authorAvatar.alt = `${author.name}'s avatar`;

  const authorNameElement = document.createElement("p");
  authorNameElement.id = "profile-name";
  authorNameElement.textContent = author.name;

  // Add editor div if author and logged user is same person
  const localName = JSON.parse(localStorage.getItem("adminUser"));
  if (author.name === localName.name) {
    const editorDiv = document.createElement("div");
    editorDiv.id = "editorOptions";
    editorDiv.classList.add("hidden");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete post";
    deleteBtn.id = "deleteBtn";
    deleteBtn.type = "button";
    deleteBtn.setAttribute("data-id", id);

    const editBtn = document.createElement("a");
    editBtn.classList.add("edit-btn");
    editBtn.href = `/post/edit/?post=${id}`;
    editBtn.textContent = "Edit post";

    editorDiv.appendChild(editBtn);
    editorDiv.appendChild(deleteBtn);

    authorSection.appendChild(editorDiv);
  }

  authorLink.appendChild(authorAvatar);
  authorLink.appendChild(authorNameElement);

  authorSection.appendChild(authorLink);

  postContainer.appendChild(postSection);
  postContainer.appendChild(authorSection);

  return;
}
