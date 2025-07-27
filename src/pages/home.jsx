import { SidebarInset } from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <SidebarInset>
      <header className="flex h-14 shrink-0 items-center gap-2">
        <div className="flex flex-1 items-center gap-2 px-3"></div>
        <div className="ml-auto px-3"></div>
      </header>
      <div className="flex gap-0.5 pl-30 justify-center">
        <div className="flex flex-1 flex-col gap-4 px-4 py-10 shrink">
          <div className="bg-card mx-auto h-30 w-full max-w-3xl rounded-sm flex items-center justify-center gap-5">
            <Avatar className=" size-15 rounded-xl">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input className="h-10 w-md " placeholder="What's happening?" />
            <Button
              type="submit"
              variant="secondary"
              className="h-10 hover:h-11 hover:w-15"
            >
              Post
            </Button>
          </div>
          <div className="bg-card mx-auto h-50 w-full max-w-3xl rounded-sm" />
          <div className="bg-card mx-auto h-50 w-full max-w-3xl rounded-sm" />
          <div className="bg-card mx-auto h-50 w-full max-w-3xl rounded-sm" />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <div className="bg-card  h-full w-lg max-w-3xl rounded-sm flex items-center justify-center gap-5"></div>
        </div>
      </div>
    </SidebarInset>
  );
};

export default Home;
