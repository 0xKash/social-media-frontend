// imports
import { InputHome } from "@/components/app/home/input";
import { DialogHome } from "@/components/app/home/dialogHome";
import { MainPosts } from "@/components/app/home/app-mainPosts";
import { HomeUsers } from "@/components/app/home/app-homeUsers";
import { useFetchAuth } from "@/hooks/useFetchAuth";

const Home = () => {
  // sample data
  const { user } = useFetchAuth();

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <InputHome avatar={user.avatar} />
        <MainPosts />
      </div>
      <HomeUsers />
      <DialogHome avatar={user.avatar} />
    </main>
  );
};

export default Home;
