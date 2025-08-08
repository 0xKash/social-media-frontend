import { MainComments } from "@/components/app/post/comments/app-mainComments";
import { FeaturedUsers } from "@/components/app/post/users/app-featuredUsers";
import { InputComment } from "@/components/app/post/input/app-inputComment";
import { PostDisplay } from "@/components/app/post/posts/app-postDisplay";
import { useFetchPost } from "@/hooks/posts/useFetchPost";
import { useFetchAuth } from "@/hooks/auth/useFetchAuth";
import { useEffect, useState } from "react";

const Post = () => {
  const { user } = useFetchAuth();
  const { post, comments } = useFetchPost(user.id);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <PostDisplay {...post} />
        <InputComment {...user} />
        <MainComments comments={comments} userId={user.id} />
      </div>

      <FeaturedUsers />
    </main>
  );
};

export default Post;
