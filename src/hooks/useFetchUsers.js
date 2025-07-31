import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "@/api/user";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers(5);

        setUsers(data);
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return users;
};
