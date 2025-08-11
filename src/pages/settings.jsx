import { AvatarEdit } from "@/components/app/settings/avatarEdit";
import { UserContext } from "@/App";
import { useContext } from "react";
import { DescriptionEdit } from "@/components/app/settings/descriptionEdit";

const Settings = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex flex-col gap-5 min-h-screen">
      <AvatarEdit avatar={user.avatar} />
      <DescriptionEdit description={user.description} />
    </main>
  );
};

export default Settings;
