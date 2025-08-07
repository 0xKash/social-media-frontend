import { getPost } from "@/api/posts/post";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useFetchPost = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPost(params.postId);
        setPost(data);
        setIsLoading(false);
      } catch (err) {
        navigate("/login");
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  return { post, error, isLoading };
};
