/**
 * Builds the profile hero section dynamically.
 * @param {Object} user - The user data to populate the profile.
 * @returns {HTMLElement} - The fully constructed profile hero section.
 */
export function createProfileHero(user) {
  // Section
  const section = document.createElement("section");
  section.id = "hero-profile";
  section.className =
    "w-full max-w-screen-xl rounded-lg bg-no-repeat bg-center bg-cover relative min-h-[38em] bg-black/40";
  section.style.backgroundImage = `url(${user.banner.url})`;

  // Inner overlay div
  const overlay = document.createElement("div");
  overlay.className =
    "absolute bg-black/55 sm:w-full sm:max-w-[25em] h-48 left-2 right-2 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 transform rounded-md flex justify-center items-center gap-2";

  // Avatar
  const avatar = document.createElement("img");
  avatar.id = "avatar";
  avatar.src = user.avatar.url;
  avatar.alt = user.avatar.alt;
  avatar.className = "w-24 h-24 bg-cover rounded-md";

  // Profile name
  const name = document.createElement("h1");
  name.id = "profile-name";
  name.className = "text-xl text-white font-semibold";
  name.textContent = user.name;

  // Edit profile link
  const editLink = document.createElement("a");
  editLink.id = "anchor-edit";
  editLink.href = "#update-profile";
  editLink.className = "hidden absolute top-2 right-2 text-[var(--primary-color)] font-semibold hover:underline";
  editLink.textContent = "edit profile";

  // Stats div
  const statsDiv = document.createElement("div");
  statsDiv.className =
    "flex flex-col sm:flex-row items-center justify-evenly absolute -bottom-28 sm:-bottom-14 w-full sm:max-w-[25em] p-2 bg-black/50 rounded-md text-black font-semibold";

  const followers = document.createElement("p");
  followers.id = "followers-count";
  followers.className = "text-white";
  followers.textContent = `Followers: ${user._count.followers}`;

  const following = document.createElement("p");
  following.id = "following-count";
  following.className = "text-white";
  following.textContent = `Following: ${user._count.following}`;

  const posts = document.createElement("p");
  posts.id = "posts-count";
  posts.className = "text-white";
  posts.textContent = `Posts: ${user._count.posts}`;

  // Append stats
  statsDiv.append(followers, following, posts);

  // Append children to overlay
  overlay.append(avatar, name, editLink, statsDiv);

  // Append overlay to section
  section.appendChild(overlay);

  return section;
}
