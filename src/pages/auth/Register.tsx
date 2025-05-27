import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { customBtnbg, customInputClass1 } from "@/presets";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState<{
    type: "confirm-password" | "password" | null;
    show: boolean;
  }>({
    type: null,
    show: false,
  });

  const togglePasswordVisibility = (type: "password" | "confirm-password") => {
    setShowPassword((prev) => ({
      type: type,
      show: prev.type === type ? !prev.show : true,
    }));
  };

  return (
    <div className="h-svh flex justify-center items-center">
      <div className="absolute top-10 left-20 max-[720px]:top-2 max-[720px]:left-2">
        <Logo />
      </div>
      <div className="size-[40rem] p-[3%] max-[720px]:p-0 max-[720px]:w-full max-[720px]:min-h-full max-[720px]:mt-32">
        <h1 className=" text-center text-[1.75rem] font-bold max-[720px]:text-[1.5rem]">
          Sign up for free
        </h1>
        <form className="mt-[12px] min-h-[30rem] flex flex-col items-center gap-4 max-[720px]:p-5">
          <div className="flex  justify-center flex-col gap-3 max-[720px]:w-full">
            <Label className=" text-[1rem]">Username</Label>
            <Input
              placeholder="Enter your username"
              className={customInputClass1}
            />
          </div>
          <div className="flex  justify-center flex-col gap-3 max-[720px]:w-full">
            <Label className=" text-[1rem]">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className={customInputClass1}
            />
          </div>
          <div className="flex  justify-center flex-col gap-3 relative max-[720px]:w-full">
            <Label className=" text-[1rem]">Password</Label>
            <Input
              type={
                showPassword.type === "password" && showPassword.show
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              className={customInputClass1}
            />
            <div
              className=" absolute right-4 bottom-4 cursor-pointer"
              onClick={() => togglePasswordVisibility("password")}
            >
              {showPassword.type === "password" && showPassword.show ? (
                <EyeOff />
              ) : (
                <Eye />
              )}
            </div>
          </div>
          <div className="flex  justify-center flex-col gap-3 relative max-[720px]:w-full">
            <Label className=" text-[1rem]">Confirm password</Label>
            <Input
              type={
                showPassword.type === "confirm-password" && showPassword.show
                  ? "text"
                  : "password"
              }
              placeholder="Re-Enter your password"
              className={customInputClass1}
            />
            <div
              className=" absolute right-4 bottom-4 cursor-pointer"
              onClick={() => togglePasswordVisibility("confirm-password")}
            >
              {showPassword.type === "confirm-password" && showPassword.show ? (
                <EyeOff />
              ) : (
                <Eye />
              )}
            </div>
          </div>
          <Button
            className={`${customBtnbg} mt-3 hover:text-txt-primary-white`}
          >
            Sign Up
          </Button>
          <Link
            to="/auth/login"
            className=" text-xs text-txt-secondary-white hover:underline"
          >
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
