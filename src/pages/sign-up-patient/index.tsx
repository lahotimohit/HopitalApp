import React from "react";
import Link from "next/link";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { MdLock } from "react-icons/md";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

function SignUp() {
  return (
    <div className="h-screen w-full">
      <Card className="mx-auto mt-48 max-w-96 shadow-gray-600">
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
          <Avatar>
            <AvatarImage
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              className="w-40"
            />
          </Avatar>
          <Input
            id="useremail"
            className="mx-auto p-5"
            placeholder="Email Address"
          />

          <Input
            id="userpass"
            type="password"
            className="mx-auto mt-3 p-5"
            placeholder="Password"
          />

          <Input
            id="userpass"
            type="password"
            className="mx-auto mt-3 p-5"
            placeholder="Confirm Password"
          />
          {/* todo */}
          <Button className="mt-5 w-4/5 rounded-full bg-blue-600 hover:bg-blue-800">
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
