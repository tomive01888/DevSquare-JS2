/**
 * Covers up the screen with a black screen with logo and text "Restricted access" and "Login or register new user", together with the DevSquare logo.
 */
export function displayRestrictedCoverUp() {
  const body = document.querySelector("body");
  const div = document.createElement("div");

  div.id = "cover-up";
  div.classList.add(
    "bg-black",
    "z-[9999]",
    "w-full",
    "min-h-[100vh]",
    "fixed",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-4"
  );

  const img = document.createElement("img");
  img.id = "cover-up-logo";
  img.src = "/images/devsquare2.png";
  img.classList.add("w-full", "max-w-[400px]", "bg-gray-200", "rounded-lg", "p-4");

  const title = document.createElement("h1");
  title.textContent = "Restricted access";
  title.classList.add("text-white", "text-2xl", "font-bold");

  const text = document.createElement("p");
  text.classList.add("text-white", "text-lg", "mt-2");
  text.textContent = "Login or register new user";

  div.appendChild(title);
  div.appendChild(img);
  div.appendChild(text);
  body.appendChild(div);
}
