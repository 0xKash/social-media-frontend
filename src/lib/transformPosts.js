import { dateToText, formatDate } from "./utils";

export const transformPosts = (apiPosts) => {
  return apiPosts.map((post) => ({
    username: post.author.username,
    joinedAt: dateToText(new Date(post.author.joinedAt)),
    avatar: post.author.avatar,
    badgeBool: post.author.github_id ? true : false,
    followBool: false,
    date: formatDate(new Date(post.createdAt)),
    content: post.content,
    likeBool: false,
    likeNumber: 0,
    commentNumber: 0,
  }));
};
