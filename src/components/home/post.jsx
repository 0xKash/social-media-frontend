// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCardHome } from "@/components/home/hovercard";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { PostButtons } from "./postButtons";
import { DropdownMenuSettings } from "../common/dropdownSettings";
import { deletePost } from "@/api/posts/post";

export function Post({
  authorId,
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
  userId,
  postId,
}) {
  const handleDelete = async () => {
    await deletePost(postId);
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className=" flex gap-3 items-center w-full h-fit">
        <div className="flex items-center">
          <Avatar
            className=" rounded-lg cursor-pointer"
            onClick={() => (window.location.href = `/${username}`)}
          >
            <AvatarImage src={avatar} />
            <AvatarFallback>KH</AvatarFallback>
          </Avatar>
          <HoverCardHome
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
      <PostButtons
        likeBool={likeBool}
        likeNumber={likeNumber}
        commentNumber={commentNumber}
        postId={postId}
      />
    </div>
  );
}
