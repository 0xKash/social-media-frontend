import { FeaturedUsers } from "@/components/app/post/featuredUsers";
import { InputComment } from "@/components/app/post/input";
import { PostDisplay } from "@/components/app/post/postDisplay";

const Post = () => {
  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <PostDisplay />
        <InputComment />
      </div>
      <FeaturedUsers />
    </main>
  );
};

export default Post;
