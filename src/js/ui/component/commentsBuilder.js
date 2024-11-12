export function createComment(comments) {
  const commentsArea = document.getElementById("comments-area");
  commentsArea.textContent = "";

  if (!comments || comments.length === 0) {
    commentsArea.textContent = "This post has no comments";
    return;
  }

  comments.forEach((comment) => {
    const { author, body } = comment;

    const commentWrapper = document.createElement("div");
    commentWrapper.classList.add("comment-wrapper");

    const profileCommenter = document.createElement("div");
    profileCommenter.classList.add("profile-commenter");

    const img = document.createElement("img");
    img.src = author.avatar.url;
    img.alt = `${author.name}'s profile picture`;

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = author.name;

    profileCommenter.appendChild(img);
    profileCommenter.appendChild(nameParagraph);

    const commentParagraph = document.createElement("p");
    commentParagraph.classList.add("comment");
    commentParagraph.textContent = body;

    commentWrapper.appendChild(profileCommenter);
    commentWrapper.appendChild(commentParagraph);

    commentsArea.appendChild(commentWrapper);
  });
}
