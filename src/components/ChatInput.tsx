"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FC, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../firebase";

interface ChatInputProps {
  id: string;
}

const ChatInput: FC<ChatInputProps> = ({ id }) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //TODO useSWE to get model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      message
    );

    const notification = toast.loading("chatGPT is thinking");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        id,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatGPT has responded!", {
        id: notification,
      });
    });
  };

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm m-2'>
      <form onSubmit={(e) => sendMessage(e)} className='p-5 space-x-5 flex'>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          placeholder='Type your message here...'
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
        />
        <button
          type='submit'
          disabled={!prompt || !session}
          className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed'>
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>

        <div>{/* model */}</div>
      </form>
    </div>
  );
};

export default ChatInput;
