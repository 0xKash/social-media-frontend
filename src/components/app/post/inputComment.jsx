import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createComment } from "@/api/posts/comment";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function InputComment({ avatar }) {
  const [content, setContent] = useState([]);
  const params = useParams();

  const handleSubmit = async () => {
    await createComment(content, params.postId);
    window.location.reload();
  };

  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg border p-5 max-sm:hidden ">
      <Avatar className="lg:size-10 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <form
        action=""
        className="flex flex-col gap-2 w-full"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="comment">Comment something</Label>
        <div className="flex items-center gap-4">
          <Input
            className=""
            placeholder="What do you think?"
            maxLength="120"
            id="comment"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
          />
          <Button className="h-full p-2">Comment</Button>
        </div>
      </form>
    </div>
  );
}
