import { getPost } from "@/api/posts/post";
import { transformComments } from "@/lib/handlers/data/comments/transformComments";
import { transformPost } from "@/lib/handlers/data/posts/transformPosts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useFetchPost = (userId) => {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPost(params.postId);

        setPost(transformPost(data, userId));
        setComments(transformComments(data.comments, userId));

        setIsLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/login");
        setError(err);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  return { post, comments, error, isLoading };
};
