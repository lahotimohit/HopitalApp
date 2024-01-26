"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
const LazyLoadedLottieComp = dynamic(() => (import('lottie-react')), {ssr: false})
import regsiterAni from "../../../public/animation/register.json";
import { MdLock } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Min Length should be 5" })
    .max(50, { message: "Max Length should be 50" }),
  password: z
    .string()
    .min(8, { message: "Min Length of password should be 8" })
    .max(25, { message: "Max Length should be 50" }),
  confirmPassword: z.string(),
});

type TFormSchema = z.infer<typeof formSchema>;

function SignUp() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TFormSchema>({});

  const handleSignUp: SubmitHandler<TFormSchema> = ({
    email,
    confirmPassword,
    password,
  }) => {
    if (password !== confirmPassword) {
      return;
    }
    console.log(email, confirmPassword, password);
  };

  const animationStyle = {
    height: 150,
  };

  return (
    <div className="flex h-[90vh] w-full items-center justify-center">
      <Card className="max-w-96 shadow-gray-600">
        <CardHeader>
          <CardTitle>
            <div className="font-sans text-2xl">Register Yourself</div>
          </CardTitle>
          <CardDescription>
            Already Have an Account?{" "}
            <Link
              href="/sign-in-patient"
              className="text-blue-600 transition-all duration-100 hover:text-blue-800"
            >
              Sign In
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          {/* <Avatar>
            <AvatarImage
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              className="w-40"
            />
          </Avatar> */}
          <LazyLoadedLottieComp animationData={regsiterAni} loop={false} style={animationStyle} />
          {/* <CiUser className="my-4 h-32 w-32 rounded-full border-4 border-black p-2" /> */}
          <div className="flex w-full flex-col gap-1">
            <Input
              id="useremail"
              className="mx-auto p-5"
              placeholder="Email Address"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            {errors && errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <Input
              id="userpass"
              type="password"
              className="mx-auto mt-3 p-5"
              placeholder="Password"
              {...register("password", {
                required: {
                  message: "Password is Required",
                  value: true,
                },
              })}
            />
            {errors && errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <Input
            id="userpass"
            type="password"
            className="mx-auto mt-3 p-5"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
          {/* todo */}
          <Button
            className="mt-5 w-4/5 rounded-full bg-blue-600 hover:bg-blue-800"
            onClick={handleSubmit(handleSignUp)}
          >
            <MdLock className="mr-2 h-4 w-4" /> Create Account
          </Button>
          <p className="p-4 font-sans text-xs italic">
            By selecting Create account, you agree to our{" "}
            <Link className="text-blue-600" href="/">
              Terms
            </Link>{" "}
            and have read and acknowledge our{" "}
            <Link className="text-blue-600" href="">
              Global Privacy Statement.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
