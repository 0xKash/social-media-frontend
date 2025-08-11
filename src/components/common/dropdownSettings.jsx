import { deleteComment } from "@/api/posts/comment";
import { deletePost } from "@/api/posts/post";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, Trash } from "lucide-react";
export function DropdownMenuSettings({ variant, postId, commentId }) {
  const handleDelete = async () => {
    switch (variant) {
      case "post":
        await deletePost(postId);
        console.log("post");
        break;

      case "comment":
        await deleteComment(commentId, postId);
        console.log("comment");
        break;
    }

    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <EllipsisVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <Trash className="ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
