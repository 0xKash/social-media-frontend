import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { PostUsername } from "@/components/app/post/posts/postUsername";
import { PostContent } from "@/components/app/post/posts/postContent";
import { PostButtons } from "@/components/app/post/posts/postButtons";

export function PostDisplay({
  username,
  avatar,
  joinedAt,
  userId,
  targetId,
  followBool,
  content,
  likeNumber,
  commentNumber,
}) {
  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg  p-5  border">
      <Avatar className="lg:size-20 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <div className=" size-full">
        <PostUsername
          username={username}
          avatar={avatar}
          joinedAt={joinedAt}
          userId={userId}
          targetId={targetId}
          followBool={followBool}
        />
        <PostContent content={content} />
        <PostButtons likeNumber={likeNumber} commentNumber={commentNumber} />
      </div>
    </div>
  );
}
