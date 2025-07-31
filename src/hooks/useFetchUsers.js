import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "@/api/user";
import { transformUsers } from "@/lib/transfromUsers";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const limit = 5;

    const fetchUsers = async () => {
      try {
        const { data } = await getUsers(limit);

        setUsers(transformUsers(data));
      } catch (err) {
        navigate("/login");
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return users;
};
