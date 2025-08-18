import { dislikePost, likePost } from "@/api/posts/like";
import { Button } from "@/components/ui/button";
import { useLikes } from "@/hooks/posts/useLikes";
import { Heart, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export function PostButtons({ likeNumber, commentNumber, likeBool, postId }) {
  const { like, likeCount, handleLike, handleDislike } = useLikes(
    postId,
    likeBool,
    likeNumber
  );

  return (
    <div className="flex gap-1 ml-4 mt-1">
      <div className="flex items-center">
        {like ? (
          <Button className="w-fit" variant="ghost" onClick={handleDislike}>
            <Heart color="#FF0000" fill="#FF0000" />
            <p className="text-[#FF0000] text-xs">{likeCount}</p>
          </Button>
        ) : (
          <Button className="w-fit" variant="ghost" onClick={handleLike}>
            <Heart />
            <p className="text-xs">{likeCount}</p>
          </Button>
        )}
      </div>
      <div className="flex items-center">
        <Button className="w-fit" variant="ghost" disabled>
          <MessageSquare />
          <p className="text-xs">{commentNumber}</p>
        </Button>
      </div>
    </div>
  );
}
