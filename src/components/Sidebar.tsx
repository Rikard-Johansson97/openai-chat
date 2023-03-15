/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import React, { FC } from "react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className='flex flex-col h-screen p-2'>
      <div className='flex-1 '>
        <div>
          <NewChat />
          <div className='hidden sm:inline'>
            <ModelSelection />
          </div>
          <div className='flex flex-col space-y-2 my-2'>
            {loading && (
              <div className='animate-pulse text-center text-white'>
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center p-4'>
        {session && (
          <img
            src={session.user?.image!}
            alt='user image'
            className='h-12 w-12 rounded-full duration-200'
          />
        )}
        <div
          className='text-white flex items-center gap-1 cursor-pointer duration-200 opacity-75 hover:opacity-100'
          onClick={() => signOut()}>
          <p>Logout</p>
          <ArrowLeftOnRectangleIcon className='h-6 w-6 ' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
