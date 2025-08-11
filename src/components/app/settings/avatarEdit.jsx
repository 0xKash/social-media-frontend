import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateAvatar } from "@/api/users/user";

export function AvatarEdit({ avatar }) {
  const [avatarState, setAvatarState] = useState(avatar);
  const [avatarPreview, setAvatarPreview] = useState([]);
  const [previewBool, setPreviewBool] = useState(false);

  useEffect(() => {
    setAvatarState(avatar);
  }, [avatar]);

  const handleOnChange = (e) => {
    if (e.target.files[0]) {
      setAvatarState(e.target.files[0]);
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
      setPreviewBool(true);
    } else {
      setPreviewBool(false);
      setAvatarState(avatar);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatarState);

    await updateAvatar(formData);
    window.location.reload();
  };

  return (
    <div className="w-full bg-popover h-fit flex items-center gap-5 rounded-lg  p-5  border">
      <Avatar className="size-30 sm:size-50 rounded-lg">
        <AvatarImage src={previewBool ? avatarPreview : avatarState} />
        <AvatarFallback>KH</AvatarFallback>
      </Avatar>
      <div className="size-full flex flex-col gap-7">
        <h1 className="text-2xl font-semibold">
          Select or drop an image to change your avatar:
        </h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <Label htmlFor="picture">Avatar</Label>
          <Input
            id="picture"
            type="file"
            className="sm:w-full md:w-2/3 lg:w-1/3"
            onChange={handleOnChange}
          />
          <Button className="ml-auto">Submit</Button>
        </form>
      </div>
    </div>
  );
}
