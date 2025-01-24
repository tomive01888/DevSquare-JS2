/**
 * Creates and returns a profile update form for users.
 *
 * @function createUpdateProfileForm
 * @returns {HTMLElement} A section element containing the profile update form.
 *
 * @description Dynamically generates a profile update form, including inputs for updating bio, avatar, and banner details.
 * This form is made to be used on a user's own profile page. It includes text inputs, a textarea for the bio,
 * and placeholders to guide the user. Additionally, the function appends an error message container for validation feedback.
 */

export function createUpdateProfileForm() {
  const section = document.createElement("section");
  section.id = "update-profile";
  section.classList.add("mt-xl", "w-full", "shadow-lg", "p-4", "border-gray", "bg-neutral-100", "rounded-lg");

  const h4 = document.createElement("h4");
  h4.textContent = "Update profile";
  h4.classList.add("text-dynamic_h4");
  section.appendChild(h4);

  const form = document.createElement("form");
  form.name = "updateProfile";
  form.classList.add("form");

  const hiddenDiv = document.createElement("div");
  const inputUsername = document.createElement("input");
  inputUsername.id = "profile-editor";
  inputUsername.type = "hidden";
  inputUsername.name = "username";
  inputUsername.value = "";
  hiddenDiv.appendChild(inputUsername);
  form.appendChild(hiddenDiv);

  const bioDiv = document.createElement("div");
  const labelBio = document.createElement("label");
  labelBio.setAttribute("for", "bio");
  labelBio.textContent = "Bio:";
  labelBio.classList.add("w-full");

  const textarea = document.createElement("textarea");
  textarea.classList.add("form-textarea");
  textarea.name = "bio";
  textarea.id = "bio";
  textarea.rows = 4;
  textarea.maxLength = 160;
  textarea.placeholder = "Write your bio here...";
  bioDiv.appendChild(labelBio);
  bioDiv.appendChild(textarea);
  form.appendChild(bioDiv);

  const avatarSrcDiv = document.createElement("div");
  const labelAvatarSrc = document.createElement("label");
  labelAvatarSrc.classList.add("w-full");
  labelAvatarSrc.setAttribute("for", "avatarSrc");
  labelAvatarSrc.textContent = "Avatar Image Source (URL):";
  const inputAvatarSrc = document.createElement("input");
  inputAvatarSrc.classList.add("form-input");
  inputAvatarSrc.type = "text";
  inputAvatarSrc.name = "avatarSrc";
  inputAvatarSrc.id = "avatarSrc";
  inputAvatarSrc.placeholder = "Enter avatar image URL";
  avatarSrcDiv.appendChild(labelAvatarSrc);
  avatarSrcDiv.appendChild(inputAvatarSrc);
  form.appendChild(avatarSrcDiv);

  const avatarAltDiv = document.createElement("div");
  const labelAvatarAlt = document.createElement("label");
  labelAvatarAlt.classList.add("w-full");
  labelAvatarAlt.setAttribute("for", "avatarAlt");
  labelAvatarAlt.textContent = "Avatar Image Alt Text:";
  const inputAvatarAlt = document.createElement("input");
  inputAvatarAlt.classList.add("form-input");
  inputAvatarAlt.type = "text";
  inputAvatarAlt.name = "avatarAlt";
  inputAvatarAlt.id = "avatarAlt";
  inputAvatarAlt.maxLength = 120;
  inputAvatarAlt.placeholder = "Enter avatar alt text";
  avatarAltDiv.appendChild(labelAvatarAlt);
  avatarAltDiv.appendChild(inputAvatarAlt);
  form.appendChild(avatarAltDiv);

  const bannerSrcDiv = document.createElement("div");
  const labelBannerSrc = document.createElement("label");
  labelBannerSrc.classList.add("w-full");
  labelBannerSrc.setAttribute("for", "bannerSrc");
  labelBannerSrc.textContent = "Banner Image Source (URL):";
  const inputBannerSrc = document.createElement("input");
  inputBannerSrc.classList.add("form-input");
  inputBannerSrc.type = "text";
  inputBannerSrc.name = "bannerSrc";
  inputBannerSrc.id = "bannerSrc";
  inputBannerSrc.placeholder = "Enter banner image URL";
  bannerSrcDiv.appendChild(labelBannerSrc);
  bannerSrcDiv.appendChild(inputBannerSrc);
  form.appendChild(bannerSrcDiv);

  const bannerAltDiv = document.createElement("div");
  const labelBannerAlt = document.createElement("label");
  labelBannerAlt.classList.add("w-full");
  labelBannerAlt.setAttribute("for", "bannerAlt");
  labelBannerAlt.textContent = "Banner Image Alt Text:";
  const inputBannerAlt = document.createElement("input");
  inputBannerAlt.classList.add("form-input");
  inputBannerAlt.type = "text";
  inputBannerAlt.name = "bannerAlt";
  inputBannerAlt.id = "bannerAlt";
  inputBannerAlt.maxLength = 120;
  inputBannerAlt.placeholder = "Enter banner alt text";
  bannerAltDiv.appendChild(labelBannerAlt);
  bannerAltDiv.appendChild(inputBannerAlt);
  form.appendChild(bannerAltDiv);

  const submitButton = document.createElement("button");
  submitButton.classList.add("base-button", "font-semibold", "w-full", "max-w-28", "self-end");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  form.appendChild(submitButton);
  section.appendChild(form);

  const errorMsgDiv = document.createElement("div");
  errorMsgDiv.id = "error-update-msg";
  section.appendChild(errorMsgDiv);

  return section;
}
