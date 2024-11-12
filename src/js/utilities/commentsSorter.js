export async function getMainComments(comments) {
  const filter = comments.filter((comment) => comment.replyToId === null);
  return filter;
}
