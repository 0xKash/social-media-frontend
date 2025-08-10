import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { ProfileStats } from "@/components/profile/ProfileStats";

export function ProfileContent({
  username,
  badgeBool,
  description,
  followBool,
  followedByCount,
  followingCount,
  userId,
  authId,
}) {
  return (
    <>
      <div className="w-full flex items-center">
        <h1 className="text-2xl">@{username}</h1>
        {badgeBool && (
          <Badge
            variant="default"
            className="flex h-5 bg-chart-1 text-white text-sm rounded-sm ml-3"
          >
            <BadgeCheckIcon />
            Github
          </Badge>
        )}
      </div>
      <div className="w-2/3 flex items-center">
        {description && <p>{description}</p>}
      </div>
      <ProfileStats
        followBool={followBool}
        followedByCount={followedByCount}
        followingCount={followingCount}
        userId={userId}
        authId={authId}
      />
    </>
  );
}
