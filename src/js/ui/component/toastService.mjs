/**
 * Toast Notification Service for Vanilla JS / Tailwind / MPA.
 * * This service creates a fixed container and provides functions to display toasts.
 * It also uses sessionStorage to persist messages across page redirects,
 * solving the common MPA problem where redirects prevent the toast from showing.
 */
const TOAST_CONTAINER_ID = "toast-container";
const STORAGE_KEY = "pendingToast";
const DEFAULT_DURATION_MS = 3000;

const TYPE_CLASSES = {
  success: "bg-green-500 text-white shadow-green-400/50",
  error: "bg-red-500 text-white shadow-red-400/50",
  info: "bg-gray-600 text-white shadow-gray-500/50",
};

let container = document.getElementById(TOAST_CONTAINER_ID);

if (!container) {
  container = document.createElement("div");
  container.id = TOAST_CONTAINER_ID;
  container.classList.add(
    "fixed",
    "top-20",
    "right-4",
    "z-50",
    "flex",
    "flex-col",
    "gap-2",
    "max-w-xs",
    "pointer-events-none"
  );
  document.body.appendChild(container);
}

/**
 * Creates and displays a single toast notification.
 * @param {string} message - The message to display.
 * @param {'success'|'error'|'info'} type - The type of toast.
 */
function showToast(message, type = "info") {
  const classSet = TYPE_CLASSES[type] || TYPE_CLASSES.info;

  const toastElement = document.createElement("div");
  toastElement.classList.add(
    "p-3",
    "rounded-lg",
    "font-semibold",
    "pointer-events-auto",
    "cursor-pointer",
    "transition-all",
    "duration-500",
    "transform",
    "opacity-0",
    "translate-x-full",
    "shadow-sm",
    ...classSet.split(" ")
  );
  toastElement.textContent = message;

  toastElement.addEventListener("click", () => {
    hideToast(toastElement);
  });

  container.prepend(toastElement);

  setTimeout(() => {
    toastElement.classList.remove("opacity-0", "translate-x-full");
  }, 10);

  const duration = type === "error" ? DEFAULT_DURATION_MS * 2 : DEFAULT_DURATION_MS;

  setTimeout(() => {
    hideToast(toastElement);
  }, duration);
}

/**
 * Hides and removes the toast element from the DOM.
 * @param {HTMLElement} element - The toast element to hide.
 */
function hideToast(element) {
  if (element.parentNode === container) {
    element.classList.add("opacity-0", "translate-x-full");
    element.addEventListener("transitionend", () => element.remove());
  }
}

/**
 * Stores a toast message in sessionStorage before a redirect.
 * @param {string} url - The URL to redirect to.
 * @param {string} message - The toast message to display on the next page.
 * @param {'success'|'error'|'info'} type - The type of toast.
 */
export function redirectWithToast(url, message, type = "success") {
  const toastData = JSON.stringify({ message, type });
  sessionStorage.setItem(STORAGE_KEY, toastData);
  window.location.href = url;
}

/**
 * Checks sessionStorage on page load for any pending toast messages and displays them.
 */
function checkStorageForToast() {
  const storedToast = sessionStorage.getItem(STORAGE_KEY);
  if (storedToast) {
    try {
      const data = JSON.parse(storedToast);
      showToast(data.message, data.type);
    } catch (e) {
      console.error("Error parsing stored toast data:", e);
      showToast("Error displaying saved message.", "error");
    } finally {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }
}

checkStorageForToast();

export { showToast };

window.showToast = showToast;
