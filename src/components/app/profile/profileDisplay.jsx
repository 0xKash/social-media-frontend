import { ProfileContent } from "@/components/profile/ProfileContent";
import { useFetchUserByUsername } from "@/hooks/users/useFetchUserByusername";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";

export function ProfileDisplay({ authId }) {
  const params = useParams();
  const { user } = useFetchUserByUsername(params.username, authId);

  return (
    <div className="w-full bg-popover h-fit flex items-center  gap-5 rounded-lg p-5 border">
      <Avatar className="lg:size-30 rounded-lg ">
        <AvatarImage src={user.avatar} />
        <AvatarFallback className="text-5xl">KH</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <ProfileContent {...user} userId={user.id} authId={authId} />
      </div>
    </div>
  );
}
