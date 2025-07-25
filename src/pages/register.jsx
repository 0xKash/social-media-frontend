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

function Register() {
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
              text-anchor="middle"
              fill="white"
              font-size="120"
              font-family="Segoe UI, sans-serif"
              font-weight="600"
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input id="email" placeholder="Username" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                </div>
                <Input id="confirm-password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            variant="secondary"
            className="w-full bg-chart-1"
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Register;
