import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { CHATBOT_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initChatSession = (): Chat => {
  if (chatSession) return chatSession;

  genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

  chatSession = genAI.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initChatSession();
  }

  if (!chatSession) {
    return "Error: No se pudo conectar con el asistente de IA.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({
        message: message
    });
    return response.text || "Lo siento, no pude generar una respuesta.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Tuve un problema al procesar tu solicitud. Por favor intenta de nuevo.";
  }
};