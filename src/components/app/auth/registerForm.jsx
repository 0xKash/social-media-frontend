import { registerUser } from "@/api/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerErrorHandler } from "@/lib/errorHandlers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

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
          <Input
            id="password"
            type="password"
            value={password}
            error={error}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            maxLength="64"
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$"
            title="Must contain at least one number, one uppercase letter, one lowercase letter and one symbol"
            required
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
            required
          />
          {error && error.error === "password" && (
            <p className="text-xs text-red-500">{error.data}</p>
          )}
        </div>
      </div>
    </form>
  );
}
