// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCardHome } from "@/components/app/home/hovercard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, BadgeCheckIcon } from "lucide-react";

export function Post({
  avatar,
  badgeBool,
  date,
  content,
  likeBool,
  followBool,
  likeNumber,
  commentNumber,
  username,
  joinedAt,
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
            follow={followBool}
            username={username}
            joinedAt={joinedAt}
          />
          {badgeBool && (
            <Badge
              variant="default"
              className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm"
            >
              <BadgeCheckIcon />
              Github
            </Badge>
          )}
        </div>
        <p className="ml-auto text-muted-foreground text-sm">{date}</p>
      </div>
      <p>{content}</p>
      <div className="flex gap-1">
        <div className="flex items-center">
          {likeBool ? (
            <Button className="w-fit" variant="ghost">
              <Heart color="#FF0000" fill="#FF0000" />
              <p className="text-[#FF0000] text-xs">{likeNumber}</p>
            </Button>
          ) : (
            <Button className="w-fit" variant="ghost">
              <Heart />
              <p className="text-xs">267</p>
            </Button>
          )}
        </div>
        <div className="flex items-center">
          <Button className="w-fit" variant="ghost">
            <MessageSquare />
            <p className="text-xs">{commentNumber}</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
