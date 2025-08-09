import { Button } from "@/components/ui/button";

export function FollowButton() {
  return true ? (
    <Button className="ml-auto text-lg  p-4" variant="ghost">
      Following
    </Button>
  ) : (
    <Button className="ml-auto text-lg  p-4">Follow</Button>
  );
}
