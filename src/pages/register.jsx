import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerErrorHandler } from "@/lib/errorHandlers";

function Register() {
  const API_URL = process.env.API_URL;
  const [error, setError] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          confirm_password: confirmPassword,
        }),
      });

      const data = await response.json();

      // Check error on API call
      if (data.status === "error") {
        setError(registerErrorHandler(data.error));
        return;
      }

      console.log("ok");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-background ">
      <Card className="w-full max-w-sm bg-back flex justify-center items-center mb-5">
        <CardTitle className="flex items-center gap-3 text-3xl ">
          <svg
            width="40"
            height="40"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <rect width="200" height="200" rx="30" fill="#111111" />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="white"
              fontSize="120"
              fontFamily="Segoe UI, sans-serif"
              fontWeight="600"
              dy=".35em"
            >
              K
            </text>
          </svg>
          Kash.social
        </CardTitle>
      </Card>

      <Card className="w-full max-w-sm bg-back ">
        <CardHeader>
          <CardTitle>Register your new account</CardTitle>
          <CardDescription>
            Enter your username below to create your account
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link to="/login">Log In</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder="Username"
                  value={username}
                  error={error}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {error && error.error === "username" && (
                  <p className="text-xs text-red-500">{error.data}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  error={error}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={error}
                />
                {error && error.error === "password" && (
                  <p className="text-xs text-red-500">{error.data}</p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            variant="secondary"
            className="w-full bg-chart-1"
            form="register-form"
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Register;
