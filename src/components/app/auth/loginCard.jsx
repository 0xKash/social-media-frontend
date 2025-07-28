// imports
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LoginForm } from "./loginForm";
import { LoginButton } from "./loginButton";

export function LoginCard() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState([]);

  useEffect(() => {
    searchParams.get("register") && toast.success("Registration successful");
  }, []);

  return (
    <Card className="w-full max-w-sm bg-back ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">
            <Link to="/register">Sign Up</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <LoginForm setError={setError} />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {error && <p className="text-xs text-red-500">{error}</p>}
        <LoginButton />
      </CardFooter>
    </Card>
  );
}
