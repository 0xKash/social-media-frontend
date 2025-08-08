import { dateToText, formatDate } from "@/lib/utils/utils";

export const transformPosts = (apiPosts, userId) => {
  return apiPosts.map((post) => ({
    id: post.authorId,
    username: post.author.username,
    joinedAt: dateToText(new Date(post.author.joinedAt)),
    avatar: post.author.avatar,
    badgeBool: post.author.github_id ? true : false,
    followBool: post.author.followedBy.some((follow) => follow.id === userId),
    postId: post.id,
    date: formatDate(new Date(post.createdAt)),
    content: post.content,
    likeBool: post.likedBy.some((like) => like.id === userId),
    likeNumber: post._count.likedBy,
    commentNumber: post._count.comments,
  }));
};

export const transformPost = (apiPost, userId) => {
  return {
    id: apiPost.authorId,
    username: apiPost.author.username,
    joinedAt: dateToText(new Date(apiPost.author.joinedAt)),
    avatar: apiPost.author.avatar,
    postId: apiPost.id,
    followBool: apiPost.author.followedBy.some(
      (follow) => follow.id === userId
    ),
    content: apiPost.content,
    comments: apiPost.comments,
    likeNumber: apiPost._count.likedBy,
    commentNumber: apiPost._count.comments,
  };
};
