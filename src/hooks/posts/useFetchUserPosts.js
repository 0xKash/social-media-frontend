import { getUserPosts } from "@/api/posts/post";
import { transformPosts } from "@/lib/handlers/data/posts/transformPosts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchUserPosts = (username, userId) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const navigate = useNavigate("/");

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const { data } = await getUserPosts(username);
        setPosts(transformPosts(data, userId));

        setIsLoading(false);
      } catch (err) {
        navigate("/login");
        setError(err);
        setIsLoading(false);
      }
    };

    fetchUserPosts();
  }, [username, userId]);

  return { posts, error, isLoading };
};
