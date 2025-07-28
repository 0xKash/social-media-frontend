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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerErrorHandler } from "@/lib/errorHandlers";
import { registerUser } from "@/api/auth";
import { AuthTitle } from "@/components/app/auth/authTitle";
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
