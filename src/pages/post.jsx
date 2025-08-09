import { MainComments } from "@/components/app/post/mainComments";
import { FeaturedUsers } from "@/components/app/post/featuredUsers";
import { InputComment } from "@/components/app/post/inputComment";
import { PostDisplay } from "@/components/app/post/postDisplay";
import { useFetchPost } from "@/hooks/posts/useFetchPost";
import { UserContext } from "@/App";
import { useContext, useEffect, useState } from "react";
import { collectAuthorIds } from "@/lib/handlers/data/posts/collectAuthorIds";
import { UserFollow } from "@/components/post/userFollow";

const Post = () => {
  const { user } = useContext(UserContext);
  const { post, comments } = useFetchPost(user.id);

  const featuredIds = collectAuthorIds(comments, post.authorId);

  return (
    <main className="w-full py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5">
        <PostDisplay {...post} />
        <InputComment {...user} />
        <MainComments comments={comments} userId={user.id} />
      </div>
      <div className="bg-popover w-1/2 h-fit sticky top-10 max-xl:hidden rounded-lg p-5 border">
        <h4 className="text-2xl font-semibold">Featured users</h4>
        {featuredIds.map((id, key) => (
          <UserFollow key={key} authorId={id} userId={user.id} />
        ))}
      </div>
    </main>
  );
};

export default Post;
