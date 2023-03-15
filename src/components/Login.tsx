"use client";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import React, { FC } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className='bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center'>
      <Image
        src='/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png'
        width={300}
        height={300}
        alt='logo'
      />
      <button
        className='text-white font-bold text-3xl animate-pulse flex items-center justify-center gap-2 hover:animate-none'
        onClick={() => signIn("google")}>
        <ArrowRightOnRectangleIcon className='w-10 h-10' />
        Click to Sign in
      </button>
    </div>
  );
};

export default Login;
