<<<<<<< Updated upstream
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index;
=======
import React from "react";
import Link from "next/link";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { TbStethoscope } from "react-icons/tb";

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

function signinDoctor() {
  return (
    <section className="h-[90%] w-full">
      <Card className="mx-auto mt-48 max-w-96 shadow-gray-600">
        <CardHeader>
          <CardTitle>
            <div className="font-sans text-2xl">Sign In Doctor</div>
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
          <Button className="mt-4 w-4/5 gap-2 rounded-full bg-blue-600 hover:bg-blue-800">
            Login Doctor
            <TbStethoscope className="h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default signinDoctor;
>>>>>>> Stashed changes
