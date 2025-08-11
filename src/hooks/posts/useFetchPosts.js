import { getPosts } from "@/api/posts/post";
import { transformPosts } from "@/lib/handlers/data/posts/transformPosts";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useFetchPosts = (userId, trending) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPosts(trending);
        setPosts(transformPosts(data, userId));

        setIsLoading(false);
      } catch (err) {
        console.error(err);

        navigate("/login");
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [userId, trending]);

  return { posts, error, isLoading };
};
