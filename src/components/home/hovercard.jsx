// imports
import { followUser, unfollowUser } from "@/api/users/follow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useEffect, useState } from "react";

export function HoverCardHome({
  followBool,
  username,
  joinedAt,
  avatar,
  authorId,
  userId,
}) {
  const [follow, setFollow] = useState(followBool);

  useEffect(() => {
    setFollow(followBool);
  }, [followBool]);

  const handleFollow = async () => {
    await followUser(authorId);
    setFollow(true);
  };

  const handleUnfollow = async () => {
    await unfollowUser(authorId);
    setFollow(false);
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <a href={username}>{`@${username}`}</a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <a className="text-sm font-semibold" href={username}>
              {`@${username}`}
            </a>
            <div className="text-muted-foreground text-xs">{`Joined ${joinedAt}`}</div>
          </div>
          {userId != authorId &&
            (follow ? (
              <Button
                className="ml-auto"
                variant="ghost"
                onClick={handleUnfollow}
              >
                Following
              </Button>
            ) : (
              <Button className="ml-auto" onClick={handleFollow}>
                Follow
              </Button>
            ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
