import query from "@/lib/queryApi";
import { serverTimestamp } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "../../../firebaseAdmin";

type Data = {
  answer: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { prompt, id, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" });
  }

  if (!id) {
    res.status(400).json({ answer: "Please provide a valid chatID" });
  }

  const response = await query(prompt, id, model);

  const message: Message = {
    text: response || "Chat GPT was unable to find an answer for that",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "/ChatGPT-Icon-Logo-PNG.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(id)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
};

export default handler;
