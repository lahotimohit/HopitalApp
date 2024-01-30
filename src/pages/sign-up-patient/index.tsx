"use client";

import React from "react";
import SignupPatient from "../../components/Signup/SignupPatient";
import SignupDoctor from "../../components/Signup/SignupDoctor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

function SignUp() {
  return (
    <div className="flex h-[90vh] w-full items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Doctor</TabsTrigger>
          <TabsTrigger value="password">Patient</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <SignupDoctor />
        </TabsContent>
        <TabsContent value="password">
          <SignupPatient />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default SignUp;