// imports
import { InputHome } from "@/components/app/home/input";
import { DialogHome } from "@/components/app/home/dialogHome";
import { MainPosts } from "@/components/app/home/app-mainPosts";
import { HomeUsers } from "@/components/app/home/app-homeUsers";

const Home = () => {
  // sample data
  const userAvatar = "https://github.com/shadcn.png";

  return (
    <main className="py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <InputHome avatar={userAvatar} />
        <MainPosts />
      </div>
      <HomeUsers />
      <DialogHome avatar={userAvatar} />
    </main>
  );
};

export default Home;
