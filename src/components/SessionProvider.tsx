"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

import React, { FC, ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
  session: Session | null;
}

const SessionProvider: FC<SessionProviderProps> = ({ children, session }) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
