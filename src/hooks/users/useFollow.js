import { followUser, unfollowUser } from "@/api/users/follow";
import { useEffect, useState } from "react";

export const useFollow = (followBool, targetId) => {
  const [follow, setFollow] = useState(followBool);

  useEffect(() => {
    setFollow(followBool);
  }, [followBool]);

  const handleFollow = async () => {
    setFollow(true);
    await followUser(targetId);
  };

  const handleUnfollow = async () => {
    setFollow(false);
    await unfollowUser(targetId);
  };

  return { follow, handleFollow, handleUnfollow };
};
