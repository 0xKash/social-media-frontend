import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { updateDescription } from "@/api/users/user";

export function DescriptionEdit({ description }) {
  const [descriptionState, setDescriptionState] = useState(description);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    setDescriptionState(description);
  }, [description]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDescription(descriptionState);
    window.location.reload();
  };

  return (
    <div className="w-full bg-popover h-fit flex flex-col  gap-5 rounded-lg  p-5  border">
      <h1 className="text-2xl font-semibold">Change your description:</h1>
      <form action="" className="flex gap-5" onSubmit={handleSubmit}>
        <Textarea
          className="lg:w-1/2 max-w-full h-full resize-none overflow-hidden break-all"
          resize="none"
          placeholder={descriptionState ? null : "Describe yourself!"}
          maxLength="120"
          value={descriptionState}
          onChange={(e) => {
            setDescriptionState(e.target.value);
            setEnable(true);
          }}
          required
        />
        {enable && descriptionState != description ? (
          <Button className="mt-auto">Submit</Button>
        ) : (
          <Button className="mt-auto" variant="ghost" disabled>
            Submit
          </Button>
        )}
      </form>
    </div>
  );
}
