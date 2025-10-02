import { resolve, dirname } from "path"; // <-- Import 'dirname'
import { fileURLToPath } from "url"; // <-- Import 'fileURLToPath'
import { defineConfig } from "vite";

// This is the ESM-compatible way to get the current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// This function helps generate the input object for Rollup
const getHtmlEntries = (pages) => {
  const entries = {};
  pages.forEach((page) => {
    entries[page.name] = resolve(__dirname, page.path);
  });
  return entries;
};

// Define all your pages here
const pages = [
  { name: "main", path: "index.html" },
  { name: "auth", path: "auth/index.html" },
  { name: "login", path: "auth/login/index.html" },
  { name: "register", path: "auth/register/index.html" },
  { name: "profile", path: "profile/index.html" },
  { name: "post", path: "post/index.html" },
  { name: "editPost", path: "post/edit/index.html" },
  { name: "createPost", path: "post/create/index.html" },
];

export default defineConfig({
  // Specifies this is a Multi-Page Application
  appType: "mpa",

  // Ensures paths work correctly when deployed (e.g., /images/logo.png)
  base: "/",

  build: {
    // Generates source maps for easier debugging in production
    sourcemap: true,

    rollupOptions: {
      // Tells Vite where all your HTML entry points are
      input: getHtmlEntries(pages),
    },
  },
});
