import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "@/api/user";
import { transformUsers } from "@/lib/transformUsers";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const limit = 5;

    const fetchUsers = async () => {
      try {
        const { data } = await getUsers(limit);

        setUsers(transformUsers(data));
        setIsLoading(false);
      } catch (err) {
        navigate("/login");
        setError(err);
      }
    };

    fetchUsers();
  }, []);

  return { users, error, isLoading };
};
