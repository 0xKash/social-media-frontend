import { Comment } from "./comment";
import { Separator } from "@/components/ui/separator";

export function MainComments({ comments, userId }) {
  return (
    comments &&
    comments.length != 0 && (
      <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
        {comments.map((comment, key) => (
          <div
            key={key}
            className="w-full  flex flex-col items-center justify-center"
          >
            <Comment {...comment} userId={userId} />
            {key != comments.length - 1 && <Separator className="m-3" />}
          </div>
        ))}
      </div>
    )
  );
}
