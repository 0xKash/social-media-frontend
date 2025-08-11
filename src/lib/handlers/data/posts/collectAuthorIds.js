export const collectAuthorIds = (comments, postAuthorId) => {
  const data = comments.map((comment) => comment.authorId);
  data.unshift(postAuthorId);
  const uniqueIds = [...new Set(data)];

  return uniqueIds.slice(0, 5);
};
