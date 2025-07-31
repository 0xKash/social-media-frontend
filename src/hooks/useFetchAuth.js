import { authUser } from "@/api/auth";
import { transformUser } from "@/lib/transfromUsers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchAuth = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const data = await authUser();

        console.log(data);
        setUser(transformUser(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchAuth();
  }, []);

  return user;
};
