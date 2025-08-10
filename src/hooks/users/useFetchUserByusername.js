import { getUserByUsername } from "@/api/users/user";
import { transformUser } from "@/lib/handlers/data/users/transformUsers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchUserByUsername = (username, userId) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserByUsername(username);
        setUser(transformUser(data, userId));

        setIsLoading(false);
      } catch (err) {
        navigate("/login");
        setError(err);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [username, userId]);

  return { user, error, isLoading };
};
