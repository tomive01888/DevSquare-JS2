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

import { timeSinceCreated } from "../../utilities/timeSinceCreated.mjs";
import { onDeletePost } from "../post/delete.mjs";

export function createPostContent(post) {
  const { id, title, body, media, author, tags, created } = post;

  const timeSince = timeSinceCreated(created);

  const postContainer = document.getElementById("post-container");

  const postSection = document.createElement("section");
  postSection.id = "post-content";
  postSection.classList.add(
    "border-2",
    "rounded-md",
    "w-full",
    "shadow-lg",
    "bg-neutral-100",
    "transition-padding",
    "duration-500",
    "ease-in",
    "p-2",
    "md:p-4"
  );

  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  titleElement.classList.add("text-3xl", "break-normal", "hyphens-auto", "my-3");

  const postImg = document.createElement("img");
  postImg.src = media ? media.url : "";
  postImg.alt = media ? media.alt : "";
  postImg.classList.add(
    "w-full",
    "md:max-w-[40%]",
    "min-h-48",
    "transition-width",
    "duration-500",
    "ease-in-out",
    "max-w-full"
  );

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("w-full", "min-h-36", "my-2", "border", "border-gray-300", "p-2", "rounded");
  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add("break-normal", "hyphens-auto", "w-full");
  bodyParagraph.textContent = body;
  bodyDiv.appendChild(bodyParagraph);

  const tagsElement = document.createElement("p");
  tagsElement.innerHTML = `Tags: <b> ${tags.length > 0 ? tags.join(", ") : "No tags available"}</b>`;

  const createdElement = document.createElement("p");
  createdElement.innerHTML = `Date: <b> ${created.slice(0, 10)}</b>`;

  const timeSinceElement = document.createElement("p");
  timeSinceElement.innerHTML = `Created since: <b>${timeSince} </b>`;

  postSection.appendChild(titleElement);
  postSection.appendChild(postImg);
  postSection.appendChild(bodyDiv);
  postSection.appendChild(tagsElement);
  postSection.appendChild(createdElement);
  postSection.appendChild(timeSinceElement);

  const authorSection = document.createElement("section");
  authorSection.id = "author-section";
  authorSection.classList.add(
    "flex",
    "justify-start",
    "items-start",
    "gap-4",
    "flex-col",
    "sm:flex-row",
    "sm:justify-between"
  );

  const authorLink = document.createElement("a");
  authorLink.classList.add("flex", "items-center", "gap-2", "bg-[#3d3d3d]", "rounded", "w-fit", "p-2", "text-white");
  authorLink.href = `/profile/?profile=${author.name}`;

  const authorAvatar = document.createElement("img");
  authorAvatar.classList.add("object-cover", "outline-white", "w-11", "h-11", "rounded");
  authorAvatar.id = "profile-avatar";
  authorAvatar.src = author.avatar.url;
  authorAvatar.alt = `${author.name}'s avatar`;

  const authorNameElement = document.createElement("p");
  authorNameElement.id = "profile-name";
  authorNameElement.classList.add("p-2");
  authorNameElement.textContent = author.name;
  authorSection.appendChild(authorLink);

  const localName = JSON.parse(localStorage.getItem("adminUser"));
  if (author.name === localName.name) {
    const editorDiv = document.createElement("div");
    editorDiv.id = "editorOptions";
    editorDiv.classList.remove("hidden");
    editorDiv.classList.add("flex", "gap-2");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete post";
    deleteBtn.classList.add(
      "w-fit",
      "bg-gray-500",
      "text-white",
      "p-2",
      "rounded-md",
      "cursor-pointer",
      "hover:bg-red-500",
      "transition-colors",
      "duration-700"
    );
    deleteBtn.id = "delete-btn";
    deleteBtn.type = "button";
    deleteBtn.setAttribute("data-id", id);
    deleteBtn.addEventListener("click", (event) => {
      const deletePost = confirm("Do you really want to delete this post?");
      if (!deletePost) return;

      onDeletePost(event);
    });

    const editBtn = document.createElement("a");
    editBtn.classList.add("edit-btn");
    editBtn.href = `/post/edit/?id=${id}`;
    editBtn.textContent = "Edit post";
    editBtn.classList.add("base-button", "w-fit");

    editorDiv.appendChild(editBtn);
    editorDiv.appendChild(deleteBtn);

    authorSection.appendChild(editorDiv);
  }

  authorLink.appendChild(authorAvatar);
  authorLink.appendChild(authorNameElement);

  postContainer.appendChild(postSection);
  postContainer.appendChild(authorSection);

  return;
}
