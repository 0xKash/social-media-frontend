import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function InputHome({ avatar }) {
  return (
    <div className="w-full bg-popover h-30 flex items-center gap-5 rounded-lg border p-5 max-sm:hidden">
      <Avatar className="lg:size-20 rounded-lg">
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Input />
      <Button type="submit" variant="outline">
        Post
      </Button>
    </div>
  );
}
