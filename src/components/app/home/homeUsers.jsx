// imports
import { useFetchUsers } from "@/hooks/users/useFetchUsers";
import { UserFollow } from "@/components/home/userFollow";
import { Skeleton } from "@/components/ui/skeleton";

export function HomeUsers() {
  const { users, isLoading } = useFetchUsers();

  return isLoading ? (
    <Skeleton className="w-1/2 h-4/7 rounded-xl max-xl:hidden" />
  ) : (
    <div className="bg-popover w-1/2 h-fit sticky top-10 max-xl:hidden rounded-lg p-5 border">
      <h4 className="text-2xl font-semibold">Who to follow</h4>
      {users.map((user, key) => (
        <UserFollow
          key={key}
          username={user.username}
          avatar={user.avatar}
          followBool={user.followBool}
          badgeBool={user.badgeBool}
          targetId={user.id}
        />
      ))}
    </div>
  );
}
