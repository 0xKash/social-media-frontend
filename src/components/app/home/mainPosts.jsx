// imports
import { Separator } from "@/components/ui/separator";
import { Post } from "../../home/post";
import { useFetchPosts } from "@/hooks/posts/useFetchPosts";
import { useSearchParams } from "react-router-dom";

export function MainPosts({ userId }) {
  const [searchParams] = useSearchParams();

  let data;

  if (searchParams.get("following") != null) {
    data = useFetchPosts(userId, searchParams.get("following"));
  } else if (searchParams.get("trending")) {
    data = useFetchPosts(userId, false, searchParams.get("trending"));
  } else {
    data = useFetchPosts(userId);
  }

  const { posts, isLoading } = data;

  return !isLoading && posts.length === 0 ? (
    <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
      <h1 className="text-xl font-semibold">You don't follow anyone yet!</h1>
    </div>
  ) : (
    <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
      {posts.map((post, key) => (
        <div
          key={key}
          className="w-full  flex flex-col items-center justify-center"
        >
          <Post {...post} userId={userId} />
          {key != posts.length - 1 && <Separator className="m-3" />}
        </div>
      ))}
    </div>
  );
}
