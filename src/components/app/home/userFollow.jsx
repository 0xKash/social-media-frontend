import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";

export function UserFollow({ username, avatar, followBool, badgeBool }) {
  return (
    <div className="my-5 flex items-center gap-2">
      <Avatar className="size-15 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback className="rounded-lg">KH</AvatarFallback>
      </Avatar>
      <a className="text-xl font-semibold" href="#">{`@${username}`}</a>
      {badgeBool && (
        <Badge
          variant="default"
          className="flex w-18 h-4 bg-chart-1 text-white text-xs rounded-sm"
        >
          <BadgeCheckIcon />
          Github
        </Badge>
      )}
      {followBool ? (
        <Button className="ml-auto" variant="ghost" disabled>
          Following
        </Button>
      ) : (
        <Button className="ml-auto">Follow</Button>
      )}
    </div>
  );
}
