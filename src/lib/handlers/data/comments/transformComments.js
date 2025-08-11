import { dateToText, formatDate } from "@/lib/utils/utils";

export const transformComments = (apiComments, userId) => {
  return apiComments.map((comment) => ({
    // author data
    authorId: comment.authorId,
    username: comment.author.username,
    avatar: comment.author.avatar,
    joinedAt: dateToText(new Date(comment.author.joinedAt)),
    badgeBool: comment.author.github_id ? true : false,
    followBool: comment.author.followedBy.some(
      (follow) => follow.id === userId
    ),
    // comment data
    postId: comment.postId,
    commentId: comment.id,
    date: formatDate(new Date(comment.createdAt)),
    content: comment.content,
    //auth data
    userId: userId,
  }));
};
