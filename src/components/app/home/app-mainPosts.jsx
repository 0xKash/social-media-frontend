// imports
import { Post } from "./post";

export function MainPosts() {
  const posts = [
    {
      username: "0xKash",
      joinedAt: "December 2024",
      avatar: "https://github.com/shadcn.png",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnisdis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massaquis enim.",
      date: "7/27/2025",
      badgeBool: true,
      followBool: true,
      likeBool: true,
      likeNumber: "267",
      commentNumber: "26",
    },
  ];

  return (
    <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
      {posts.map((post, key) => (
        <div key={key}>
          <Post
            username={post.username}
            joinedAt={post.joinedAt}
            avatar={post.avatar}
            badgeBool={post.badgeBool}
            followBool={post.followBool}
            date={post.date}
            content={post.content}
            likeBool={post.likeBool}
            likeNumber={post.likeNumber}
            commentNumber={post.commentNumber}
          />
          {key != posts.length - 1 && <Separator className="m-3" />}
        </div>
      ))}
    </div>
  );
}
