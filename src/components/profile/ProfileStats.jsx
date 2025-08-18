import { FollowButton } from "@/components/profile/FollowButton";
import { useEffect, useState } from "react";

export function ProfileStats({
  followedByCount,
  followingCount,
  userId,
  authId,
  followBool,
}) {
  const [followCount, setFollowCount] = useState(followedByCount);

  useEffect(() => {
    setFollowCount(followedByCount);
  }, [followedByCount]);

  return (
    <div className="flex gap-10 mt-3">
      <p className="text-muted-foreground">{`${followCount} Followers`}</p>
      <p className="text-muted-foreground">{`${followingCount} Following`}</p>
      {userId != authId && (
        <FollowButton
          followBool={followBool}
          userId={userId}
          plusFollow={() => setFollowCount(followCount + 1)}
          minusFollow={() => setFollowCount(followCount - 1)}
        />
      )}
    </div>
  );
}
