import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { Post } from "@/components/app/home/post";
import { Separator } from "@/components/ui/separator";
import { InputHome } from "@/components/app/home/input";

const Home = () => {
  // sample data
  const userAvatar = "https://github.com/shadcn.png";
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
  ];

  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, []);

  return (
    <main className="py-10 px-10 lg:p-20 lg:py-20 flex gap-5 min-h-screen ">
      <div className="w-full h-fit flex flex-col gap-5 ">
        <InputHome avatar={userAvatar} />
        <div className="w-full bg-popover h-fit flex flex-col items-center gap rounded-lg p-5">
          {posts.map((post, key) => (
            <>
              <div key={key}>
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
      <div className="w-1/2 bg-popover h-1/3 sticky top-20 max-xl:hidden rounded-lg border"></div>
    </main>
  );
};

export default Home;
