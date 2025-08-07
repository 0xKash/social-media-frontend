import { dislikePost, likePost } from "@/api/posts/like";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";

export function PostButtons({ likeNumber, commentNumber }) {
  return (
    <div className="flex gap-1 ml-4 mt-1">
      <div className="flex items-center">
        {false ? (
          <Button className="w-fit" variant="ghost">
            <Heart color="#FF0000" fill="#FF0000" />
            <p className="text-[#FF0000] text-xs">123</p>
          </Button>
        ) : (
          <Button className="w-fit" variant="ghost">
            <Heart />
            <p className="text-xs">123</p>
          </Button>
        )}
      </div>
      <div className="flex items-center">
        <Button className="w-fit" variant="ghost" disabled>
          <MessageSquare />
          <p className="text-xs">453</p>
        </Button>
      </div>
    </div>
  );
}
