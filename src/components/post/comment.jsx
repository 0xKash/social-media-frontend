import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCardCommon } from "@/components/common/hovercard";
import { Badge } from "@/components/ui/badge";

import { BadgeCheckIcon } from "lucide-react";
import { DropdownMenuSettings } from "../common/dropdownSettings";
import { deleteComment } from "@/api/posts/comment";

export function Comment({
  authorId,
  postId,
  commentId,
  avatar,
  badgeBool,
  date,
  content,
  followBool,
  username,
  joinedAt,
  userId,
}) {
  const handleDelete = async () => {
    await deleteComment(commentId, postId);
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className=" flex gap-3 items-center w-full h-fit">
        <div className="flex items-center">
          <Avatar className=" rounded-lg">
            <AvatarImage src={avatar} />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <HoverCardCommon
            followBool={followBool}
            username={username}
            joinedAt={joinedAt}
            avatar={avatar}
            authorId={authorId}
            userId={userId}
          />
          {badgeBool && (
            <Badge
              variant="default"
              className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm ml-2"
            >
              <BadgeCheckIcon />
              Github
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{date}</p>
        {userId === authorId && (
          <div className="ml-auto">
            <DropdownMenuSettings handleDelete={handleDelete} />
          </div>
        )}
      </div>
      <p>{content}</p>
    </div>
  );
}
