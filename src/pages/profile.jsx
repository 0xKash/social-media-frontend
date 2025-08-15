import { ProfileDisplay } from "@/components/app/profile/profileDisplay";
import { ProfilePosts } from "@/components/app/profile/profilePosts";
import { UserContext } from "@/App";
import { useContext } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Profile = () => {
  const { user, isLoading } = useContext(UserContext);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex flex-col gap-5 min-h-screen">
      <ProfileDisplay authId={user.id} />
      <ProfilePosts userId={user.id} />
    </main>
  );
};

export default Profile;
