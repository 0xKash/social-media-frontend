import { dislikePost, likePost } from "@/api/posts/like";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenuSettings } from "../common/dropdownSettings";
import { useLikes } from "@/hooks/posts/useLikes";

export function PostButtons({ likeBool, likeNumber, commentNumber, postId }) {
  const navigate = useNavigate();
  const { like, likeCount, handleLike, handleDislike } = useLikes(
    postId,
    likeBool,
    likeNumber
  );

  const handleComment = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="flex gap-1">
      <div className="flex items-center w-full">
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
        <Button className="w-fit" variant="ghost" onClick={handleComment}>
          <MessageSquare />
          <p className="text-xs">{commentNumber}</p>
        </Button>
      </div>
    </div>
  );
}
