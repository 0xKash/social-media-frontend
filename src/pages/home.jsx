import { SidebarInset } from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

const Home = () => {
  return (
    <main className="size-full py-10 px-10 lg:p-20 lg:py-20 border">
      <div className="flex gap-5">
        <div className="w-full h-full flex flex-col gap-5">
          <div className="w-full bg-popover h-30 flex items-center gap-5 rounded-lg border p-5 max-sm:hidden">
            <Avatar className=" rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input />
            <Button type="submit" variant="outline">
              Post
            </Button>
          </div>
        </div>
        <div className="w-1/2 bg-popover h-30 flex max-xl:hidden rounded-lg border"></div>
      </div>
    </main>
  );
};

export default Home;
