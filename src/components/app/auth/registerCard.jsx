// import
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
import { Link } from "react-router-dom";
import { RegisterForm } from "./registerForm";

export function RegisterCard() {
  return (
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
        <RegisterForm />
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
  );
}
