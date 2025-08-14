// imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createPost } from "@/api/posts/post";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function InputHome({ avatar, username, isLoading }) {
  const [content, setContent] = useState([]);

  const handleSubmit = async () => {
    await createPost(content);
    window.location.reload();
  };

  return isLoading ? (
    <Skeleton className="w-full h-[135px] rounded-xl" />
  ) : (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg border p-5 max-sm:hidden">
      <Avatar
        className="lg:size-20 rounded-lg cursor-pointer"
        onClick={() => (window.location.href = `/${username}`)}
      >
        <AvatarImage src={avatar} />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>

      <form
        className="grid w-full gap-3"
        id="text-area"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="message">Post something</Label>
        <Textarea
          className="w-full max-w-full h-full max-h-full resize-none overflow-x-hidden break-all"
          resize="none"
          placeholder="What's happening?"
          maxLength="240"
          id="message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </form>
      <Button type="submit" form="text-area" className="mt-auto">
        Post
      </Button>
    </div>
  );
}
