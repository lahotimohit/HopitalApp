"use client"

import React from "react";
import Link from "next/link";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { MdLock } from "react-icons/md";
import { CiUser } from 'react-icons/ci';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().min(5, { message: "Min Length should be 5" }).max(50, { message: "Max Length should be 50" }), 
  password: z.string().min(8, { message: "Min Length of password should be 8" }).max(25, { message: "Max Length should be 50" }),
  confirmPassword: z.string()
})

type TFormSchema = z.infer<typeof formSchema>;

function SignUp() {
  const {
    handleSubmit, 
    formState: { errors },
    register, 
  } = useForm<TFormSchema>({
    
  });

  const handleSignUp: SubmitHandler<TFormSchema> = ({ email, confirmPassword, password }) => {
    if (password !== confirmPassword) {
      return;
    }

    console.log(email, confirmPassword, password);
  }
  return (
    <div className="flex items-center justify-center h-screen w-full">
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
          <CiUser className="w-32 h-32 my-4 rounded-full p-2 border-4 border-black" />
          <div className="flex flex-col gap-1 w-full">
            <Input
              id="useremail"
              className="mx-auto p-5"
              placeholder="Email Address"
              {...register("email", { required: {
                value: true, 
                message: "Email is required"
              } })}
            />
            {errors && errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Input
              id="userpass"
              type="password"
              className="mx-auto mt-3 p-5"
              placeholder="Password"
              {...register("password", { required: {
                message: "Password is Required",
                value: true
              } })}
            />
            {errors && errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <Input
            id="userpass"
            type="password"
            className="mx-auto mt-3 p-5"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />
          {/* todo */}
          <Button className="mt-5 w-4/5 rounded-full bg-blue-600 hover:bg-blue-800" onClick={handleSubmit(handleSignUp)}>
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
