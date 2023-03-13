"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

import React, { FC } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div>
      <Image
        src='https://i.imgur.com/308CpXC.png'
        width={300}
        height={300}
        alt='logo'
      />
    </div>
  );
};

export default Login;
