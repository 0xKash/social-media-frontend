// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { useFetchUser } from "@/hooks/users/useFetchUser";
import { useState } from "react";

export function UserFollow({ authorId }) {
  const { user } = useFetchUser(authorId);
  const [follow, setFollow] = useState(user.followBool);

  const handleFollow = async () => {
    await followUser(authorId);
    setFollow(true);
  };

  const handleUnfollow = async () => {
    await unfollowUser(authorId);
    setFollow(false);
  };

  return (
    <div className="my-5 flex items-center gap-2">
      <Avatar className="size-15 rounded-lg">
        <AvatarImage src={user.avatar} />
        <AvatarFallback className="rounded-lg">KH</AvatarFallback>
      </Avatar>
      <a className="text-xl font-semibold" href="#">{`@${user.username}`}</a>
      {user.badgeBool && (
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
