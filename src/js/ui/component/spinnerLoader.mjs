/**
 * Renders out a component spinner, indication loading state.
 * */
export function createSpinner() {
  const spinner = document.createElement("div");
  spinner.className =
    "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white";
  spinner.setAttribute("role", "status");

  const srText = document.createElement("span");
  srText.className =
    "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]";
  srText.textContent = "Loading...";

  spinner.appendChild(srText);
  return spinner;
}
