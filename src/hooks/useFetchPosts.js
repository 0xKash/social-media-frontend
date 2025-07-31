import { getPosts } from "@/api/post";
import { transformPosts } from "@/lib/transformPosts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPosts();
        setPosts(transformPosts(data));
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return { posts };
};
