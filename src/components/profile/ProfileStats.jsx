import { FollowButton } from "@/components/profile/FollowButton";

export function ProfileStats() {
  return (
    <div className="flex gap-10 mt-3">
      <p className="text-muted-foreground">124823 Followers</p>
      <p className="text-muted-foreground">23 Following</p>
      <FollowButton />
    </div>
  );
}
