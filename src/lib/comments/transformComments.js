import { dateToText, formatDate } from "@/lib/utils/utils";

export const transformComments = (apiComments, userId) => {
  return apiComments.map((comment) => ({
    id: comment.authorId,
    avatar: comment.author.avatar,
    badgeBool: comment.author.github_id ? true : false,
    followBool: comment.author.followedBy.some(
      (follow) => follow.id === userId
    ),
    date: formatDate(new Date(comment.createdAt)),
    content: comment.content,
    username: comment.author.username,
    joinedAt: dateToText(new Date(comment.author.joinedAt)),
  }));
};
