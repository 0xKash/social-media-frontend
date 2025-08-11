import { dislikePost, likePost } from "@/api/posts/like";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, EllipsisVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenuSettings } from "../common/dropdownSettings";

export function PostButtons({ likeBool, likeNumber, commentNumber, postId }) {
  const navigate = useNavigate();
  const [like, setLike] = useState();
  const [likeNumberState, setLikeNumberState] = useState(likeNumber);

  useEffect(() => {
    setLike(likeBool);
  }, [likeBool]);

  const handleLike = async () => {
    await likePost(postId);

    setLike(true);
    setLikeNumberState(likeNumberState + 1);
  };

  const handleDislike = async () => {
    await dislikePost(postId);
    setLike(false);
    setLikeNumberState(likeNumberState - 1);
  };

  const handleComment = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="flex gap-1">
      <div className="flex items-center w-full">
        {like ? (
          <Button className="w-fit" variant="ghost" onClick={handleDislike}>
            <Heart color="#FF0000" fill="#FF0000" />
            <p className="text-[#FF0000] text-xs">{likeNumberState}</p>
          </Button>
        ) : (
          <Button className="w-fit" variant="ghost" onClick={handleLike}>
            <Heart />
            <p className="text-xs">{likeNumberState}</p>
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
