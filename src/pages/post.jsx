import { FeaturedUsers } from "@/components/app/post/featuredUsers";
import { PostDisplay } from "@/components/app/post/postDisplay";

const Post = () => {
  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <PostDisplay />
      <FeaturedUsers />
    </main>
  );
};

export default Post;
