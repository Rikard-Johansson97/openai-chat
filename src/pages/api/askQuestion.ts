import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" });
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chatID" });
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "Chat GPT was unable to find an answer for that",
  };
};

export default handler;
