import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import dynamic from "next/dynamic";
import { Input } from "~/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
const LazyLoadedLottieComp = dynamic(() => import("lottie-react"), {
  ssr: false,
});
import { MdLock } from "react-icons/md";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import doctorAni from "../../../public/animation/doctor.json";

const formSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Min Length should be 5" })
    .max(50, { message: "Max Length should be 50" }),
  mobile: z
    .number()
    .min(10, { message: "Phone number should be 10 digits" })
    .max(10, { message: "Phone number should be 10 digits" }),
});

type TFormSchema = z.infer<typeof formSchema>;

const animationStyle = {
  height: 200,
};

function signupPatient() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TFormSchema>({});

  const handleSignUp: SubmitHandler<TFormSchema> = ({ email, mobile }) => {
    console.log(email, mobile);
  };

  return (
    <Card className="max-w-96 shadow-gray-600">
      <CardHeader>
        <CardTitle>
          <div className="font-sans text-2xl">Register Doctor</div>
        </CardTitle>
        <CardDescription>Join our Hopital App</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <LazyLoadedLottieComp
          animationData={doctorAni}
          loop={false}
          style={animationStyle}
        />
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
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex w-full flex-col gap-1">
          <Input
            id="userpass"
            type="password"
            className="mx-auto mt-3 p-5"
            placeholder="Phone Number"
            {...register("mobile", {
              required: {
                message: "Phone Number is Required",
                value: true,
              },
            })}
          />
          {errors && errors.mobile && (
            <span className="text-sm text-red-500">
              {errors.mobile.message}
            </span>
          )}
        </div>
        <Button
          className="mt-5 w-4/5 rounded-full bg-blue-600 hover:bg-blue-800"
          onClick={handleSubmit(handleSignUp)}
        >
          <MdLock className="mr-2 h-4 w-4" /> Create Doctor Account
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
  );
}

export default signupPatient;
