/**
 * Passses data to the createPost function in api/post and handles the response
 * @visitNewPost allows user to visit their newly created post that gets enabled upon successful creation of new post.
 */

import { createPost } from "../../api/post/create";

const visitNewPost = document.querySelector(".go-to-post");
const errorContainer = document.querySelector(".error-container");

export async function onCreatePost(event) {
  event.preventDefault();

  const title = event.target.title.value.trim();
  const body = event.target.body.value.trim();
  const tags = event.target.tags.value ? event.target.tags.value.split(",").map((tag) => tag.trim()) : [];
  const media = event.target.mediaUrl.value
    ? { url: event.target.mediaUrl.value, alt: event.target.mediaAlt.value || "" }
    : null;

  try {
    visitNewPost.disabled = true;

    const response = await createPost({ title, body, tags, media });

    if (response.success === false) {
      errorContainer.innerHTML = "";
      response.errors.forEach((error) => {
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("error-message", "relative");

        const errorTxt = document.createElement("p");
        errorTxt.textContent = error.message;

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.classList.add("absolute", "right-2", "bottom-[25%]");
        closeBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
        closeBtn.addEventListener("click", () => {
          errorMsg.remove();
        });

        errorMsg.appendChild(errorTxt);
        errorMsg.appendChild(closeBtn);
        errorContainer.appendChild(errorMsg);
      });
    }

    if (response.success === true) {
      alert("Successfully made a new post!");
      const data = response;
      visitNewPost.disabled = false;
      visitNewPost.addEventListener("click", () => {
        window.location.href = `/post/?post=${data.data.id}`;
      });
    } else {
      visitNewPost.disabled = true;
      alert("Something went wrong, failed to create post.");
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
