/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";

interface MessageProps {
  message: DocumentData;
}

const Message: FC<MessageProps> = ({ message }) => {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <img src={message?.user?.avatar} alt='avatar' className='h-8 w-8' />
        <p className='pt-1 text-sm'>{message?.text}</p>
      </div>
    </div>
  );
};

export default Message;
