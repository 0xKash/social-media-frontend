import { authUser } from "@/api/auth";
import { transformUser } from "@/lib/users/transformUsers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetchAuth = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const { data } = await authUser();

        setUser(transformUser(data));
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchAuth();
  }, []);

  return { user, error, isLoading };
};
