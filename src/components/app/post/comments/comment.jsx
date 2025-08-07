import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCardHome } from "@/components/app/home/posts/hovercard";
import { Badge } from "@/components/ui/badge";

import { BadgeCheckIcon } from "lucide-react";

export function Comment({
  id,
  avatar,
  badgeBool,
  date,
  content,
  followBool,
  username,
  joinedAt,
  userId,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className=" flex gap-3 items-center w-full h-fit">
        <div className="flex items-center">
          <Avatar className=" rounded-lg">
            <AvatarImage src={avatar} />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <HoverCardHome
            followBool={followBool}
            username={username}
            joinedAt={joinedAt}
            avatar={avatar}
            targetId={id}
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
        <p className="ml-auto text-muted-foreground text-sm">{date}</p>
      </div>
      <p>{content}</p>
    </div>
  );
}
