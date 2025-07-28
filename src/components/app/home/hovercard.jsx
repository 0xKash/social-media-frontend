// imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export function HoverCardHome({ follow, username, joinedAt }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{`@${username}`}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <a className="text-sm font-semibold" href="#">
              {`@${username}`}
            </a>
            <div className="text-muted-foreground text-xs">{`Joined ${joinedAt}`}</div>
          </div>
          {follow ? (
            <Button className="ml-auto" variant="ghost" disabled>
              Following
            </Button>
          ) : (
            <Button className="ml-auto">Follow</Button>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
