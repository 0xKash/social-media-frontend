import { Button } from "@/components/ui/button";
import { useFollow } from "@/hooks/users/useFollow";

export function FollowButton({ followBool, userId, plusFollow, minusFollow }) {
  const { follow, handleFollow, handleUnfollow } = useFollow(
    followBool,
    userId
  );

  return follow ? (
    <Button
      className="ml-auto text-lg  p-4"
      variant="ghost"
      onClick={() => {
        handleUnfollow();
        minusFollow();
      }}
    >
      Following
    </Button>
  ) : (
    <Button
      className="ml-auto text-lg  p-4"
      onClick={() => {
        handleFollow();
        plusFollow();
      }}
    >
      Follow
    </Button>
  );
}
