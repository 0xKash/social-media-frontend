import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function InputComment({ avatar }) {
  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg border p-5 max-sm:hidden ">
      <Avatar className="lg:size-10 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <form action="" className="flex flex-col gap-2 w-full">
        <Label htmlFor="comment">Comment something</Label>
        <div className="flex items-center gap-2">
          <Input
            className=""
            placeholder="What do you think?"
            maxLength="120"
            id="comment"
            required
          />
          <Button className="h-full p-2">Comment</Button>
        </div>
      </form>
    </div>
  );
}
