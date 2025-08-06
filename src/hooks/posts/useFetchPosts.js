import { getPosts } from "@/api/posts/post";
import { transformPosts } from "@/lib/posts/transformPosts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchPosts = (userId) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPosts();
        setPosts(transformPosts(data, userId));

        setIsLoading(false);
      } catch (err) {
        navigate("/login");
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return { posts, error, isLoading };
};
