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
    commentNumber: 0,
  }));
};
