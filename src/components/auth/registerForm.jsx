// imports
import { registerUser } from "@/api/auth/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerErrorHandler } from "@/lib/handlers/error/error";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

export function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirm, setToggleConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(username, password, confirmPassword);

      // Check error on API call
      if (data.status === "error") {
        setError(registerErrorHandler(data.error));
        return;
      }

      navigate("/login?register=true");
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
            minLength="3"
            maxLength="12"
            required
          />
          {error && error.error === "username" && (
            <p className="text-xs text-red-500">{error.data}</p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          {togglePassword ? (
            <div className="flex items-center gap-2">
              <Input
                id="password"
                value={password}
                error={error.length === 0 ? null : error}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
                maxLength="64"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$"
                title="Must contain at least one number, one uppercase letter, one lowercase letter and one symbol"
                required
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => setTogglePassword(false)}
              >
                <Eye className="size-5" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Input
                id="password"
                type="password"
                value={password}
                error={error.length === 0 ? null : error}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
                maxLength="64"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$"
                title="Must contain at least one number, one uppercase letter, one lowercase letter and one symbol"
                required
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => setTogglePassword(true)}
              >
                <EyeOff className="size-5" />
              </Button>
            </div>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="confirm-password">Confirm password</Label>
          </div>

          {toggleConfirm ? (
            <div className="flex items-center gap-2">
              <Input
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={error.length === 0 ? null : error}
                required
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => setToggleConfirm(false)}
              >
                <Eye className="size-5" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={error.length === 0 ? null : error}
                required
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => setToggleConfirm(true)}
              >
                <EyeOff className="size-5" />
              </Button>
            </div>
          )}

          {error && error.error === "password" && (
            <p className="text-xs text-red-500">{error.data}</p>
          )}
        </div>
      </div>
    </form>
  );
}
