// imports
import { Toaster } from "sonner";
import { AuthTitle } from "@/components/auth/common/app-authTitle";
import { LoginCard } from "@/components/app/auth/loginCard";

function Login() {
  return (
    <>
      <Toaster richColors />
      <AuthTitle />
      <LoginCard />
    </>
  );
}

export default Login;
