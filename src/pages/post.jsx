import { MainComments } from "@/components/app/post/mainComments";
import { FeaturedUsers } from "@/components/app/post/featuredUsers";
import { InputComment } from "@/components/app/post/inputComment";
import { PostDisplay } from "@/components/app/post/postDisplay";
import { useFetchPost } from "@/hooks/posts/useFetchPost";
import { UserContext } from "@/App";
import { useContext } from "react";

const Post = () => {
  const { user } = useContext(UserContext);
  const { post, comments } = useFetchPost(user.id);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <PostDisplay {...post} />
        <InputComment {...user} />
        <MainComments comments={comments} />
      </div>

      <FeaturedUsers />
    </main>
  );
};

export default Post;
