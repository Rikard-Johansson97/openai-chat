import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      top_p: 1,
      temperature: 0.9,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 1000,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) => `chatGPT was unable to find a answer for that ${err.message}`
    );

  return res;
};

export default query;
