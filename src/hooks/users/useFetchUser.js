import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getUsers } from "@/api/users/user";
import { transformUser } from "@/lib/handlers/data/users/transformUsers";

export const useFetchUser = (targetId, userId) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser(targetId);
        if (data) setUser(transformUser(data, userId)); // prevent possible errors

        setIsLoading(false);
      } catch (err) {
        navigate("/login");

        setError(err);
      }
    };

    fetchUser();
  }, [targetId, userId]);

  return { user, error, isLoading };
};
