"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User } from 'next-auth';
import { Loader2, LogOutIcon, User2Icon } from 'lucide-react';
import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';


interface UserDropdownProps {
    user: User | undefined,
    status: "loading" | "authenticated"
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, status }) => {
    const router = useRouter();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer'>
                {(status === "authenticated") && <AvatarImage src={user?.image as string | undefined} />}
                {(status === "loading") && <AvatarFallback><Loader2 className='animate-spin duration-1000 ease' /></AvatarFallback>}
                {(status === "authenticated") && <AvatarFallback><div className='tracking-tight text-lg font-semibold'>{user?.name?.toString().slice(0, 2).toUpperCase()}</div></AvatarFallback>}
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/profile")} className='flex gap-2 cursor-pointer'><User2Icon className='h-5 w-5'/>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })} className='flex gap-2 cursor-pointer'><LogOutIcon className='h-5 w-5'/>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown;