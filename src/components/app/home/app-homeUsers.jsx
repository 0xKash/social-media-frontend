// imports
import { useFetchUsers } from "@/hooks/useFetchUsers";
import { UserFollow } from "./userFollow";

export function HomeUsers() {
  const { users } = useFetchUsers();

  return (
    <div className="bg-popover w-1/2 h-fit sticky top-10 max-xl:hidden rounded-lg p-5 border">
      <h4 className="text-2xl font-semibold">Who to follow</h4>
      {users.map((user, key) => (
        <UserFollow
          key={key}
          username={user.username}
          avatar={user.avatar}
          followBool={user.followBool}
          badgeBool={user.badgeBool}
        />
      ))}
    </div>
  );
}
