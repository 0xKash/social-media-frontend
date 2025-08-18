// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { useState } from "react";
import { followUser, unfollowUser } from "@/api/users/follow";
import { useFollow } from "@/hooks/users/useFollow";

export function UserFollow({
  username,
  avatar,
  followBool,
  badgeBool,
  targetId,
}) {
  const { follow, handleFollow, handleUnfollow } = useFollow(
    followBool,
    targetId
  );

  return (
    <div className="my-5 flex items-center gap-2">
      <Avatar
        className="size-15 rounded-lg cursor-pointer"
        onClick={() => (window.location.href = `/${username}`)}
      >
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
