// imports
import { InputHome } from "@/components/app/home/inputHome";
import { DialogHome } from "@/components/app/home/dialogHome";
import { MainPosts } from "@/components/app/home/mainPosts";
import { HomeUsers } from "@/components/app/home/homeUsers";
import { UserContext } from "@/App";
import { useContext } from "react";

const Home = () => {
  const user = useContext(UserContext);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <InputHome avatar={user.avatar} />
        <MainPosts userId={user.id} />
      </div>
      <HomeUsers />
      <DialogHome avatar={user.avatar} />
    </main>
  );
};

export default Home;
