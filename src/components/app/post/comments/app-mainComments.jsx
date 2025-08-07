import { Comment } from "./comment";
import { Separator } from "@/components/ui/separator";

export function MainComments() {
  // sample data
  const userId = 1;

  const comments = [
    {
      avatar: "https://github.com/shadcn.png",
      badgeBool: true,
      date: "17/7/2025",
      content: "This is a sample comment",
      username: "Kash",
    },
  ];

  return (
    <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
      {comments.map((post, key) => (
        <div
          key={key}
          className="w-full  flex flex-col items-center justify-center"
        >
          <Comment {...post} userId={userId} />
          {key != comments.length - 1 && <Separator className="m-3" />}
        </div>
      ))}
    </div>
  );
}
