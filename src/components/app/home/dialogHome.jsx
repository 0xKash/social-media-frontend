import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function DialogHome({ avatar }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed size-15 bottom-6 right-4 sm:right-6 rounded-full shadow-md p-4 z-50 sm:hidden">
          <Plus className="size-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md h-1/2 flex flex-col">
        <DialogHeader className="flex flex-row items-center h-fit ">
          <Avatar className="size-15 rounded-lg">
            <AvatarImage src={avatar} />
            <AvatarFallback className="rounded-lg">KH</AvatarFallback>
          </Avatar>
          <DialogTitle className="w-fit h-fit">New post</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2 h-full ">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Textarea
            id="link"
            className="w-full max-w-full h-full  resize-none overflow-hidden break-all"
            resize="none"
            placeholder="What's happening?"
            maxLength="240"
          />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button">Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
