import { dateToText, formatDate } from "@/lib/utils/utils";

// Array of posts
export const transformPosts = (apiPosts, userId) => {
  return apiPosts.map((post) => ({
    // author data
    authorId: post.authorId,
    username: post.author.username,
    avatar: post.author.avatar,
    joinedAt: dateToText(new Date(post.author.joinedAt)),
    badgeBool: post.author.github_id ? true : false,
    followBool: post.author.followedBy.some((follow) => follow.id === userId),
    // post data
    postId: post.id,
    date: formatDate(new Date(post.createdAt)),
    content: post.content,
    likeBool: post.likedBy.some((like) => like.id === userId),
    likeNumber: post._count.likedBy,
    commentNumber: post._count.comments,
  }));
};

// Single post
export const transformPost = (post, userId) => {
  return {
    // author data
    authorId: post.authorId,
    username: post.author.username,
    avatar: post.author.avatar,
    joinedAt: dateToText(new Date(post.author.joinedAt)),
    badgeBool: post.author.github_id ? true : false,
    followBool: post.author.followedBy.some((follow) => follow.id === userId),
    // post data
    postId: post.id,
    date: formatDate(new Date(post.createdAt)),
    content: post.content,
    likeBool: post.likedBy.some((like) => like.id === userId),
    likeNumber: post._count.likedBy,
    likeNumber: post._count.likedBy,
    commentNumber: post._count.comments,
  };
};
