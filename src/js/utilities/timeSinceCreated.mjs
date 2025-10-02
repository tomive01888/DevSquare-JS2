/**
 * Calculates the time difference between the given timestamp and the current time, returning a human-readable string.
 *
 * @param {string|number} postTimestamp - The timestamp of the post, which can be a string or number.
 * @returns {string} A string representing the time elapsed since the post was created, formatted as:
 *                   - "{X} days ago" for days
 *                   - "{X} hours ago" for hours
 *                   - "{X} minutes ago" for minutes
 */
export function timeSinceCreated(postTimestamp) {
  const postDate = new Date(postTimestamp);
  const now = new Date();
  const diffInMs = now - postDate;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else {
    return `${diffInMinutes} min${diffInMinutes > 1 ? "s" : ""} ago`;
  }
}
