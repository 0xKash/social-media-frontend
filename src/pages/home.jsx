import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Post } from "@/components/app/home/post";
import { Separator } from "@/components/ui/separator";
import { InputHome } from "@/components/app/home/input";
import { Button } from "@/components/ui/button";
import { UserFollow } from "@/components/app/home/userFollow";
import { useState } from "react";
import { Plus } from "lucide-react";
import { DialogHome } from "@/components/app/home/dialogHome";

const Home = () => {
  // sample data
  const userAvatar = "https://github.com/shadcn.png";
  const users = [
    {
      username: "0xKash",
      avatar: "https://github.com/shadcn.png",
      followBool: true,
      badgeBool: true,
    },
    {
      username: "0xKash",
      avatar: "https://github.com/shadcn.png",
    },
    {
      username: "0xKash",
      avatar: "https://github.com/shadcn.png",
    },
    {
      username: "0xKash",
      avatar: "https://github.com/shadcn.png",
    },
    {
      username: "0xKash",
      avatar: "https://github.com/shadcn.png",
    },
  ];
  const posts = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    <main className="py-10 pr-11 lg:pr-20 lg:pl-9 flex gap-5 min-h-screen">
      <div className="w-full h-fit flex flex-col gap-5  ">
        <InputHome avatar={userAvatar} />
        <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5  border">
          {posts.map((post, key) => (
            <>
              <div>
                <Post
                  avatar={post.avatar}
                  badgeBool={post.badgeBool}
                  followBool={post.followBool}
                  date={post.date}
                  content={post.content}
                  likeBool={post.likeBool}
                  likeNumber={post.likeNumber}
                  commentNumber={post.commentNumber}
                />
              </div>
              {key != posts.length - 1 && <Separator className="m-3" />}
            </>
          ))}
        </div>
      </div>
      <div className="bg-popover w-1/2 h-fit sticky top-10 max-xl:hidden rounded-lg p-5 border">
        <h4 className="text-2xl font-semibold">Who to follow</h4>
        {users.map((user, key) => (
          <UserFollow
            key={key}
            username={user.username}
            avatar={user.avatar}
            followBool={user.followBool}
            badgeBool={user.badgeBool}
          />
        ))}
      </div>

      <DialogHome avatar={userAvatar} />
    </main>
  );
};

export default Home;
