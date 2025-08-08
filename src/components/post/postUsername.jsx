import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { followUser } from "@/api/users/follow";
import { useEffect, useState } from "react";

export function PostUsername({
  username,
  avatar,
  joinedAt,
  userId,
  targetId,
  followBool,
}) {
  const [follow, setFollow] = useState(followBool);

  useEffect(() => {
    setFollow(followBool);
  }, [followBool]);

  const handleFollow = async () => {
    await followUser(targetId);
    setFollow(true);
  };

  const handleUnfollow = async () => {
    await followUser(targetId);
    setFollow(false);
  };

  return (
    <HoverCard>
      <div className="flex  items-center gap-0">
        <HoverCardTrigger asChild>
          <Button variant="link">
            <h1 className="text-xl">{username}</h1>
          </Button>
        </HoverCardTrigger>
      </div>
      <HoverCardContent className="w-80">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <a className="text-sm font-semibold" href="#">
              {`@${username}`}
            </a>

            <div className="text-muted-foreground text-xs">{`Joined ${joinedAt}`}</div>
          </div>
          {userId != targetId &&
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
