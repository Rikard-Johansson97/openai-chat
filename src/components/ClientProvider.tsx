"use client";

import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

interface ClientProviderProps {}

const ClientProvider: FC<ClientProviderProps> = ({}) => {
  return <Toaster position='top-right'></Toaster>;
};

export default ClientProvider;
