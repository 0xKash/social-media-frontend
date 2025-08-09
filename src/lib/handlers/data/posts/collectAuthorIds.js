export const collectAuthorIds = (comments, postAuthorId) => {
  const data = comments.map((comment) => comment.authorId);
  data.slice(0, 5);
  data.unshift(postAuthorId);

  return data;
};
