import { authUser } from "@/api/auth/auth";
import { transformAuth } from "@/lib/handlers/data/users/transformUsers";
import { useEffect, useState } from "react";

export const useFetchAuth = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const { data } = await authUser();

        setUser(transformAuth(data));
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
