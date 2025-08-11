// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { createPost } from "@/api/posts/post";
import { createComment } from "@/api/posts/comment";

export function DialogPost({ avatar, postId }) {
  const [content, setContent] = useState([]);

  const handleSubmit = async () => {
    await createComment(content, postId);
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed size-15 bottom-6 right-4 sm:right-6 rounded-full shadow-md p-4 z-50 sm:hidden">
          <Plus className="size-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-1/2 flex flex-col">
        <DialogHeader className="flex flex-row items-center h-fit ">
          <Avatar className="size-15 rounded-lg">
            <AvatarImage src={avatar} />
            <AvatarFallback className="rounded-lg">KH</AvatarFallback>
          </Avatar>
          <DialogTitle className="w-fit h-fit">New comment</DialogTitle>
        </DialogHeader>
        <form
          id="dialog-form"
          className="flex items-center gap-2 h-full"
          onSubmit={handleSubmit}
        >
          <Textarea
            className="w-full max-w-full h-full resize-none overflow-hidden break-all"
            resize="none"
            placeholder="What do you think?"
            maxLength="240"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" form="dialog-form">
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
