// imports

import { UserFollow } from "@/components/home/userFollow";

export function FeaturedUsers({ users }) {
  return (
    <div className="bg-popover w-1/2 h-fit sticky top-10 max-xl:hidden rounded-lg p-5 border">
      <h4 className="text-2xl font-semibold">Featured Users</h4>
      {users && users.map((user, key) => <UserFollow key={key} {...user} />)}
    </div>
  );
}
