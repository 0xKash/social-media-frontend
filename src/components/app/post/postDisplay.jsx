import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { PostUsername } from "@/components/post/postUsername";
import { PostContent } from "@/components/post/postContent";
import { PostButtons } from "@/components/post/postButtons";

export function PostDisplay({
  username,
  avatar,
  joinedAt,
  userId,
  authorId,
  followBool,
  content,
  likeNumber,
  commentNumber,
  date,
  likeBool,
  postId,
}) {
  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg  p-5  border">
      <Avatar
        className="lg:size-20 rounded-lg cursor-pointer"
        onClick={() => (window.location.href = `/${username}`)}
      >
        <AvatarImage src={avatar} />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <div className=" size-full">
        <PostUsername
          username={username}
          avatar={avatar}
          joinedAt={joinedAt}
          userId={userId}
          authorId={authorId}
          followBool={followBool}
          date={date}
          postId={postId}
        />
        <PostContent content={content} />
        <PostButtons
          likeBool={likeBool}
          likeNumber={likeNumber}
          commentNumber={commentNumber}
          postId={postId}
        />
      </div>
    </div>
  );
}
