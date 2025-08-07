import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { PostUsername } from "./postUsername";
import { PostContent } from "./postContent";
import { PostButtons } from "./postButtons";

export function PostDisplay({
  username,
  joinedAt,
  avatar,
  id,
  userId,
  followBool,
  badgeBool,
}) {
  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg  p-5  border">
      <Avatar className="lg:size-20 rounded-lg">
        <AvatarImage />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <div className=" size-full">
        <PostUsername />
        <PostContent />
        <PostButtons />
      </div>
    </div>
  );
}
