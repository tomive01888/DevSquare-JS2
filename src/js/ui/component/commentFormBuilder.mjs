import { onCommentPost } from "../post/comment.mjs";

export function createCommentForm() {
  const form = document.createElement("form");
  form.name = "comment";
  form.id = "commentBox";
  form.className = "mt-4 relative mt-16 flex flex-col";

  // Label
  const label = document.createElement("label");
  label.className = "bg-white px-3 py-2 rounded absolute -top-10 left-0";
  label.htmlFor = "comment";
  label.textContent = "Comment here:";
  form.appendChild(label);

  // Textarea
  const textarea = document.createElement("textarea");
  textarea.name = "commentBox";
  textarea.id = "comment";
  textarea.maxLength = 280;
  textarea.className = "form-textarea";
  form.appendChild(textarea);

  // Submit button
  const button = document.createElement("button");
  button.className = "base-button w-fit px-10 self-end font-bold text-lg";
  button.type = "submit";
  button.textContent = "Comment";
  form.appendChild(button);

  form.addEventListener("submit", onCommentPost);

  return form;
}
