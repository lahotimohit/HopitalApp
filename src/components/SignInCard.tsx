"use client"

import React from "react";
import Link from "next/link";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { signIn } from "next-auth/react";

function SignInCard() {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const { value, id } = event.target;
      const userdetail = { useremail: "", userpass: "" };
      if (id === "useremail") {
        userdetail.useremail = value;
      } else if (id === "userpass") {
        userdetail.userpass = value;
      }
      console.log(userdetail);
    }
  
    return (
      <section className="h-[90%] w-full">
        <Card className="mx-auto mt-48 max-w-96 shadow-gray-600">
          <CardHeader>
            <CardTitle>
              <div className="font-sans text-2xl">Sign In</div>
            </CardTitle>
            <CardDescription>
              Don't Have an Account?{" "}
              <Link
                href="/sign-up-patient"
                className="text-blue-600 transition-all duration-100 hover:text-blue-800"
              >
                Sign Up
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Input
              id="useremail"
              onChange={handleChange}
              className="mx-auto p-5 shadow-gray-200"
              placeholder="Email or Username"
            />
            <Input
              id="userpass"
              onChange={handleChange}
              type="password"
              className="mx-auto mt-3 p-5 shadow-gray-200"
              placeholder="Password"
            />
            {/* todo */}
            <Button className="mt-4 w-4/5 rounded-full bg-blue-600 hover:bg-blue-800">
              Login Patient
            </Button>
            <Button
              variant={"outline"}
              className="mt-3 w-4/5 rounded-full shadow-gray-200 transition-all duration-100 hover:bg-gray-200"
              onClick={() => signIn("google")}
            >
              <FaGoogle className="mr-2 h-4 w-4" /> Login with Google
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }
  
  export default SignInCard;
  