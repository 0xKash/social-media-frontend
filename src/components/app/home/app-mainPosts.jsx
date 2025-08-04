// imports
import { Separator } from "@/components/ui/separator";
import { Post } from "./post";
import { useFetchPosts } from "@/hooks/posts/useFetchPosts";

export function MainPosts() {
  const { posts } = useFetchPosts();

  return (
    <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
      {posts.map((post, key) => (
        <div
          key={key}
          className="w-full  flex flex-col items-center justify-center"
        >
          <Post {...post} />
          {key != posts.length - 1 && <Separator className="m-3" />}
        </div>
      ))}
    </div>
  );
}
