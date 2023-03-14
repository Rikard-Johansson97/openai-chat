import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import React, { FC } from "react";

interface pageProps {
  params: { id: string };
}

const page: FC<pageProps> = ({ params: { id } }) => {
  return (
    <div className='flex flex-col h-screen overflow-y-hidden'>
      <Chat id={id} />
      <ChatInput id={id} />
    </div>
  );
};

export default page;
