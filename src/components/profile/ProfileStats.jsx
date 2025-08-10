import { FollowButton } from "@/components/profile/FollowButton";
import { useEffect, useState } from "react";

export function ProfileStats({
  followedByCount,
  followingCount,
  userId,
  authId,
  followBool,
}) {
  const [followedByCountState, setfollowedByCountState] = useState([]);

  useEffect(() => {
    setfollowedByCountState(followedByCount);
  }, [followedByCount]);

  return (
    <div className="flex gap-10 mt-3">
      <p className="text-muted-foreground">{`${followedByCountState} Followers`}</p>
      <p className="text-muted-foreground">{`${followingCount} Following`}</p>
      {userId != authId && (
        <FollowButton
          followBool={followBool}
          userId={userId}
          plusFollow={() => setfollowedByCountState(followedByCountState + 1)}
          minusFollow={() => setfollowedByCountState(followedByCountState - 1)}
        />
      )}
    </div>
  );
}
