// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { useState } from "react";
import { followUser, unfollowUser } from "@/api/users/follow";

export function UserFollow({
  username,
  avatar,
  followBool,
  badgeBool,
  targetId,
}) {
  const [follow, setFollow] = useState(followBool);

  const handleFollow = async () => {
    await followUser(targetId);
    setFollow(true);
  };

  const handleUnfollow = async () => {
    await unfollowUser(targetId);
    setFollow(false);
  };

  return (
    <div className="my-5 flex items-center gap-2">
      <Avatar className="size-15 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback className="rounded-lg">KH</AvatarFallback>
      </Avatar>
      <a className="text-xl font-semibold" href={username}>{`@${username}`}</a>
      {badgeBool && (
        <Badge
          variant="default"
          className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm ml-3"
        >
          <BadgeCheckIcon />
          Github
        </Badge>
      )}
      {follow ? (
        <Button className="ml-auto" variant="ghost" onClick={handleUnfollow}>
          Following
        </Button>
      ) : (
        <Button className="ml-auto" onClick={handleFollow}>
          Follow
        </Button>
      )}
    </div>
  );
}
