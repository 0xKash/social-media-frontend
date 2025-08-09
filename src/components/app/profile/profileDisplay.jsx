import { ProfileContent } from "@/components/profile/ProfileContent";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function ProfileDisplay() {
  return (
    <div className="w-full bg-popover h-fit flex items-center  gap-5 rounded-lg p-5 border">
      <Avatar className="lg:size-30 rounded-lg ">
        <AvatarImage src="https://avatars.githubusercontent.com/u/199593326?v=4" />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <ProfileContent />
      </div>
    </div>
  );
}
