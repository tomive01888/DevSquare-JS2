/**
 * Passses data to the createPost function in api/post and handles the response
 */

import { updatePost } from "../../api/post/update";
import { redirectWithToast, showToast } from "../component/toastService.mjs";

const errorContainer = document.querySelector(".error-container");
export async function onUpdatePost(event) {
  event.preventDefault();
  const id = event.target.id.value.trim();
  const title = event.target.title.value.trim();
  const body = event.target.body.value.trim();
  const tags = event.target.tags.value ? event.target.tags.value.split(",").map((tag) => tag.trim()) : [];
  const media = {
    url: event.target.mediaUrl.value.trim() || "",
    alt: event.target.mediaAlt.value.trim() || "",
  };

  try {
    const response = await updatePost(id, { title, body, tags, media });

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
      redirectWithToast(`/post/?id=${id}`, "Successfully updated post", "success");
    } else {
      showToast("Something went wrong, failed to update post.", "error");
    }
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
