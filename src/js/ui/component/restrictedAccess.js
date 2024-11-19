/**
 * Covers up the screen with a black screen with logo and text "Restricted access" and "Login or register new user", together with the DevSquare logo.
 */

export function displayRestrictedCoverUp() {
  const body = document.querySelector("body");
  const div = document.createElement("div");

  div.id = "cover-up";
  const img = document.createElement("img");
  img.id = "cover-up-logo";
  img.src = "/images/DevSquare.png";

  const title = document.createElement("h1");
  title.textContent = "Restricted access";

  const text = document.createElement("p");
  text.textContent = "Login or register new user";

  div.appendChild(title);
  div.appendChild(img);
  div.appendChild(text);
  body.appendChild(div);
}
