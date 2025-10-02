/**
 * Creates an array of link elements with nested div, image, and paragraph,
 * or appends a message element if the provided array is empty, directly to a specified container.
 *
 * @param {Array} profiles - Array of profile objects.
 * @param {string} emptyMessage - Message to display if the array is empty.
 * @param {string} container - ID of the container to append elements to ("followers" or "following").
 */
export async function createProfileLink(profiles, emptyMessage, container) {
  const targetContainer = document.getElementById(container === "followers" ? "followers-list" : "following-list");

  targetContainer.replaceChildren();

  if (!targetContainer) {
    console.error(`Container with ID "${container === "followers" ? "followers-list" : "following-list"}" not found.`);
    return;
  }

  if (profiles.length === 0) {
    const message = document.createElement("p");
    message.textContent = emptyMessage;
    targetContainer.appendChild(message);
  }

  profiles.forEach((profile) => {
    const link = document.createElement("a");
    link.classList.add(
      "w-[95%]",
      "transition-transform",
      "duration-200",
      "bg-white",
      "p-2",
      "flex",
      "items-center",
      "gap-2.5",
      "cursor-pointer",
      "no-underline",
      "text-black",
      "shadow-lg",
      "ease-in-out",
      "rounded-md",
      "hover:bg-gray-100",
      "hover:translate-x-3",
      "hover:transition-transform",
      "hover:duration-300"
    );
    link.href = `/profile/?profile=${profile.name}`;

    const img = document.createElement("img");
    img.src = profile.avatar.url;
    img.alt = profile.name;
    img.classList.add("object-cover", "w-[35px]", "h-[35px]", "rounded-sm", "outline", "outline-4", "outline-white");

    const paragraph = document.createElement("p");
    paragraph.textContent = profile.name;

    link.appendChild(img);
    link.appendChild(paragraph);

    targetContainer.appendChild(link);
  });
}
