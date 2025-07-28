import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function InputHome({ avatar }) {
  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg border p-5 max-sm:hidden">
      <Avatar className="lg:size-20 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="grid w-full gap-3">
        <Label htmlFor="message">Post something</Label>
        <Textarea
          className="w-full max-w-full h-full max-h-full resize-none overflow-x-hidden break-all"
          resize="none"
          placeholder="What's happening?"
          maxLength="240"
          id="message"
        />
      </div>
      <Button type="submit" variant="outline" className="mt-auto">
        Post
      </Button>
    </div>
  );
}
