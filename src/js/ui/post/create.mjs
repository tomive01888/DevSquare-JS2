import { createPost } from "../../api/post/create";
import { showToast } from "../component/toastService.mjs";

const visitNewPost = document.querySelector(".go-to-post");
const errorContainer = document.querySelector(".error-container");

/**
 * Passses data to the createPost function in api/post and handles the response
 * @visitNewPost allows user to visit their newly created post that gets enabled upon successful creation of new post.
 */
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
      errorContainer.replaceChildren();
      response.errors.forEach((error) => {
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("error-message", "relative");

        const errorTxt = document.createElement("p");
        errorTxt.textContent = error.message;

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.classList.add("absolute", "right-2", "bottom-[25%]");

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-x");

        closeBtn.appendChild(icon);

        closeBtn.addEventListener("click", () => {
          errorMsg.remove();
        });

        errorMsg.appendChild(errorTxt);
        errorMsg.appendChild(closeBtn);
        errorContainer.appendChild(errorMsg);
      });
    }

    if (response.success === true) {
      showToast("Successfully made a new post!", "success");
      const data = response;
      visitNewPost.disabled = false;
      visitNewPost.addEventListener("click", () => {
        window.location.href = `/post/?id=${data.data.id}`;
      });
    } else {
      visitNewPost.disabled = true;
      showToast("Something went wrong, failed to create post.", "error");
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
