import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { ProfileStats } from "@/components/profile/ProfileStats";

export function ProfileContent() {
  const username = "@0xKash";

  return (
    <>
      <div className="w-full flex items-center">
        <h1 className="text-2xl">{username}</h1>
        <Badge
          variant="default"
          className="flex h-5 bg-chart-1 text-white text-sm rounded-sm ml-3"
        >
          <BadgeCheckIcon />
          Github
        </Badge>
      </div>
      <div className="w-2/3 flex items-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <ProfileStats />
    </>
  );
}
