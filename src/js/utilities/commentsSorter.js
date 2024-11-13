/**
 * Filters an array of comments to return only the main comments.
 * A main comment is a comment that is directly associated with a post and does not reply to another comment.
 *
 * @param {Array} comments - An array of comment objects, where each object contains properties such as `id`, `replyToId`, `content`, etc.
 * @returns {Array} - An array of main comments (comments that do not reply to another comment).
 */

export async function getMainComments(comments) {
  const filter = comments.filter((comment) => comment.replyToId === null);
  return filter;
}
