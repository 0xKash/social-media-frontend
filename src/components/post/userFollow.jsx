// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { useFetchUser } from "@/hooks/users/useFetchUser";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/App";
import { followUser, unfollowUser } from "@/api/users/follow";
import { Skeleton } from "../ui/skeleton";
import { useFollow } from "@/hooks/users/useFollow";

export function UserFollow({ authorId, userId }) {
  const { user, isLoading } = useFetchUser(authorId, userId);
  const { follow, handleFollow, handleUnfollow } = useFollow(
    user.followBool,
    authorId
  );

  return isLoading ? (
    <div className="flex">
      <Skeleton className="w-full h-[80px] mt-2" />
    </div>
  ) : (
    <div className="my-5 flex items-center gap-2">
      <Avatar
        className="size-15 rounded-lg cursor-pointer"
        onClick={() => (window.location.href = `/${username}`)}
      >
        <AvatarImage src={user.avatar} />
        <AvatarFallback className="rounded-lg">KH</AvatarFallback>
      </Avatar>
      <a
        className="text-xl font-semibold"
        href={`/${user.username}`}
      >{`@${user.username}`}</a>
      {user.badgeBool && (
        <Badge
          variant="default"
          className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm ml-3"
        >
          <BadgeCheckIcon />
          Github
        </Badge>
      )}
      {userId != authorId &&
        (follow ? (
          <Button className="ml-auto" variant="ghost" onClick={handleUnfollow}>
            Following
          </Button>
        ) : (
          <Button className="ml-auto" onClick={handleFollow}>
            Follow
          </Button>
        ))}
    </div>
  );
}
