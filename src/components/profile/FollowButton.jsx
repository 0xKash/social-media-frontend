import { followUser, unfollowUser } from "@/api/users/follow";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function FollowButton({ followBool, userId, plusFollow, minusFollow }) {
  const [follow, setFollow] = useState(followBool);

  useEffect(() => {
    setFollow(followBool);
  }, [followBool]);

  const handleFollow = async () => {
    await followUser(userId);
    plusFollow();
    setFollow(true);
  };

  const handleUnfollow = async () => {
    await unfollowUser(userId);
    minusFollow();

    setFollow(false);
  };

  return follow ? (
    <Button
      className="ml-auto text-lg  p-4"
      variant="ghost"
      onClick={handleUnfollow}
    >
      Following
    </Button>
  ) : (
    <Button className="ml-auto text-lg  p-4" onClick={handleFollow}>
      Follow
    </Button>
  );
}
