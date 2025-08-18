// imports
import { Toaster } from "sonner";
import { AuthTitle } from "@/components/auth/common/app-authTitle";
import { LoginCard } from "@/components/app/auth/loginCard";

function Login() {
  localStorage.sidebar_state = "false";

  return (
    <>
      <Toaster richColors />
      <AuthTitle />
      <LoginCard />
    </>
  );
}

export default Login;
