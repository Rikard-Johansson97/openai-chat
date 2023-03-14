import { TrashIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

interface ChatRowProps {
  id: string;
}

const ChatRow: FC<ChatRowProps> = ({ id }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));

    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active && "bg-gray-700/50"}`}>
      <ChatBubbleLeftIcon className='h-5 w-5' />
      <p className='flex-1 hidden md:inline-flex truncate'>
        {messages?.docs[messages.docs.length - 1]?.data().text || "Chat"}
      </p>
      <TrashIcon
        className='h-5 w-5 text-gray-700 duration-200 hover:text-red-700'
        onClick={removeChat}
      />
    </Link>
  );
};

export default ChatRow;
