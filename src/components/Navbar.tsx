"use client"

import { useSession } from 'next-auth/react'
import React from 'react'
import { CiHospital1 } from "react-icons/ci";
import UserDropdown from './UserDropdown';

const Navbar = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return <section className='max-h-[10%] w-full flex py-2 shadow-md justify-center items-center'>
      <CiHospital1 className='h-8 w-8'/>
    </section>
  }
  return <section className='h-[10%] w-full flex px-20 py-2 shadow-muted-foreground justify-between items-center'>
    <CiHospital1 className='h-8 w-8'/>
    <UserDropdown status={status} user={session?.user}/>
  </section>
}


export default Navbar;