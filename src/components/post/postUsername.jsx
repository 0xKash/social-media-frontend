import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { followUser, unfollowUser } from "@/api/users/follow";
import { useEffect, useState } from "react";
import { Badge, BadgeCheckIcon } from "lucide-react";
import { DropdownMenuSettings } from "../common/dropdownSettings";
import { deletePost } from "@/api/posts/post";
import { useFollow } from "@/hooks/users/useFollow";

export function PostUsername({
  username,
  avatar,
  joinedAt,
  userId,
  authorId,
  followBool,
  date,
  postId,
}) {
  const { follow, handleFollow, handleUnfollow } = useFollow(
    followBool,
    authorId
  );

  const handleDelete = async () => {
    await deletePost(postId);
    history.back();
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <HoverCard>
          <div className="flex  items-center gap-0">
            <HoverCardTrigger asChild>
              <Button variant="link">
                <h1 className="text-xl">@{username}</h1>
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
      </div>
      <p className="text-muted-foreground text-sm">{date}</p>
      {userId === authorId && (
        <div className="ml-auto">
          <DropdownMenuSettings
            variant="post"
            postId={postId}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}
