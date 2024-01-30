"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { CiHospital1 } from "react-icons/ci";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return (
      <section className="flex max-h-[10%] w-full items-center justify-center py-2 shadow-md">
        <CiHospital1 className="h-8 w-8" />
      </section>
    );
  }
  return (
    <section className="mx-auto mt-4 flex h-[10%] w-[95vw] items-center justify-between rounded-2xl bg-gradient-to-tr from-red-400 to-red-700 px-20 py-2 shadow-muted-foreground">
      <CiHospital1 className="h-8 w-8" />
      <UserDropdown status={status} user={session?.user} />
    </section>
  );
};

export default Navbar;
