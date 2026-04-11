import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const sendMessageToGemini = async (message) => {
  try {
    const res = await axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are a professional fitness trainer. Give clear and short answers.\n${message}`,
              },
            ],
          },
        ],
      }
    );

    return res.data.candidates[0].content.parts[0].text;
  } catch (err) {
    return "Error fetching response";
  }
};