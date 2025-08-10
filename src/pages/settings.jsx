import { AvatarEdit } from "@/components/app/settings/avatarEdit";
import { UserContext } from "@/App";
import { useContext } from "react";

const Settings = () => {
  const { user } = useContext(UserContext);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <AvatarEdit avatar={user.avatar} />
    </main>
  );
};

export default Settings;
