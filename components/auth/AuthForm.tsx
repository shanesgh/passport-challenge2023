"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/auth/Input";
import Button from "./Button";

type userLoginStatus = "LOGIN" | "REGISTER";

function AuthForm() {
  const [userStatus, setUserStatus] = useState<userLoginStatus>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleUserLoginStatus = useCallback(() => {
    if (userStatus === "LOGIN") {
      setUserStatus("REGISTER");
    } else {
      setUserStatus("LOGIN");
    }
  }, [userStatus]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      passportId: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (userStatus === "REGISTER") {
    }

    if (userStatus === "LOGIN") {
    }
  };

  return (
    <div>
      <div className="bg-white px-10 py-8 shadow ">
        <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          {userStatus === "REGISTER" && (
            <>
              <Input
                errors={errors}
                register={register}
                disabled={isLoading}
                id="firstName"
                type="text"
                label="First Name"
              />
              <Input
                errors={errors}
                disabled={isLoading}
                register={register}
                type="text"
                id="lastName"
                label="Last Name"
              />
            </>
          )}
          <Input
            errors={errors}
            disabled={isLoading}
            register={register}
            id="passportId"
            type="password"
            label="Passport ID"
          />
          <div>
            <Button type="submit" disabled={isLoading}>
              {userStatus == "REGISTER" ? "register" : "login"}
            </Button>
          </div>
        </form>
        <div className="flex justify-center text-md mt-6 px-2 ">
          <div
            className="underline cursor-pointer  hover:scale-105 transition-all ease-in-out duration-100"
            onClick={toggleUserLoginStatus}
          >
            {userStatus === "LOGIN" ? "First Time Login?" : "Returning User?"}
          </div>
        </div>
        <div className="flex justify-end text-sm py-6 ">
          {userStatus === "LOGIN"
            ? "Welcome Back !"
            : "Enter the details above to create an online account after your application is submitted to the Immigration Division"}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
