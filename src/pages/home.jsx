// imports
import { InputHome } from "@/components/app/home/inputs/app-inputHome";
import { DialogHome } from "@/components/app/home/inputs/app-dialogHome";
import { MainPosts } from "@/components/app/home/mainPosts/app-mainPosts";
import { HomeUsers } from "@/components/app/home/featuredUsers/app-homeUsers";
import { useFetchAuth } from "@/hooks/auth/useFetchAuth";

const Home = () => {
  const { user } = useFetchAuth();

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
