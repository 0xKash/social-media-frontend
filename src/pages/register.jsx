// imports
import { AuthTitle } from "@/components/auth/common/app-authTitle";
import { RegisterCard } from "@/components/app/auth/registerCard";

function Register() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-background ">
      <AuthTitle />
      <RegisterCard />
    </main>
  );
}

export default Register;
