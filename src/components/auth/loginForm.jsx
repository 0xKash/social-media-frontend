// imports
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/api/auth/auth";
import { loginErrorHandler } from "@/lib/handlers/error/error";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";

export function LoginForm({ setError }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);

      // Check error on API call
      if (data.status === "error") {
        setError(loginErrorHandler(data));
        return;
      }

      navigate("/home");
      location.pathname = "/home";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Username</Label>

          <Input
            id="email"
            placeholder="Username"
            minLength="3"
            maxLength="12"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          {toggle ? (
            <div className="flex items-center gap-2">
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() => setToggle(false)}
              >
                <Eye className="size-5" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() => setToggle(true)}
              >
                <EyeOff className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
