import { dislikePost, likePost } from "@/api/posts/like";
import { useEffect, useState } from "react";

export const useLikes = (postId, likeBool, likeNumber) => {
  const [like, setLike] = useState(likeBool);
  const [likeCount, setLikeCount] = useState(likeNumber);

  useEffect(() => {
    setLike(likeBool);
  }, [likeBool]);

  useEffect(() => {
    setLikeCount(likeNumber);
  }, [likeNumber]);

  const handleLike = async () => {
    setLike(true);
    setLikeCount(likeCount + 1);
    await likePost(postId);
  };

  const handleDislike = async () => {
    setLike(false);
    setLikeCount(likeCount - 1);
    await dislikePost(postId);
  };

  return { like, likeCount, handleLike, handleDislike };
};
