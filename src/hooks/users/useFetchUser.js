import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getUsers } from "@/api/users/user";
import { transformUser } from "@/lib/handlers/data/users/transformUsers";

export const useFetchUser = (userId) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser(userId);

        setUsers(transformUser(data));
        setIsLoading(false);
      } catch (err) {
        navigate("/login");
        setError(err);
      }
    };

    fetchUser();
  }, []);

  return { users, error, isLoading };
};
