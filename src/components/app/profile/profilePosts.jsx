import { useFetchUserPosts } from "@/hooks/posts/useFetchUserPosts";
import { useParams } from "react-router-dom";
import { Post } from "@/components/home/post";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfilePosts({ userId }) {
  const params = useParams();
  const { posts, isLoading } = useFetchUserPosts(params.username, userId);

  return isLoading ? (
    <Skeleton className="w-full h-[600px]" />
  ) : (
    posts.length != 0 && (
      <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
        {posts &&
          posts.map((post, key) => (
            <div
              key={key}
              className="w-full  flex flex-col items-center justify-center"
            >
              <Post {...post} userId={userId} />
              {key != posts.length - 1 && <Separator className="m-3" />}
            </div>
          ))}
      </div>
    )
  );
}
