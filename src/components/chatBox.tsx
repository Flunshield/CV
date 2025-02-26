import React, { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import robot from "../assets/robot.png"
import {PROMT_TO_SEND} from "../constante.ts";
import {isMobile} from "react-device-detect";

const genAI = new GoogleGenerativeAI("AIzaSyCzm29x9QopVNZTV0mkPok89oE1mcb_Vr0");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

interface Message {
    text: string;
    sender: "user" | "bot";
}

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        const botResponse = await fetchGeminiResponse(input);
        setIsLoading(false);

        const botMessage: Message = { text: botResponse, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
    };

    const fetchGeminiResponse = async (question: string): Promise<string> => {
        try {


            const result = await model.generateContent({
                contents: [
                    {
                        role: "user",
                        parts: [{ text: PROMT_TO_SEND + question }],
                    },
                ],
                generationConfig: { maxOutputTokens: 500, temperature: 0.5 },
            });

            return result.response.text() || "Désolé, je n'ai pas pu générer de réponse.";
        } catch (error) {
            console.error("Erreur lors de la génération de texte :", error);
            return "Erreur : impossible de générer une réponse.";
        }
    };

    useEffect(() => {
        if (isLoading) return;

        const lastMessage = messages[messages.length - 1];
        if (lastMessage?.sender === "bot") {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText(lastMessage.text.slice(0, index));
                index++;
                if (index > lastMessage.text.length) clearInterval(interval);
            }, 50);
        }
    }, [messages, isLoading]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className={clsx(isMobile ? "hidden" : "block", "fixed bottom-5 right-5 w-80 rounded-lg z-[9999]")}>
            <div className={clsx("flex flex-col bg-white rounded-2xl p-4 mb-20 border-2 border-black shadow-lg", isOpen ? "block" : "hidden")}>
                <h2 className="text-center font-bold mb-5">ChatBox</h2>
                <div ref={chatContainerRef} className="overflow-y-auto max-h-60 space-y-2">
                    {messages.map((msg, index) => (
                        <div key={index}
                             className={clsx("p-2 rounded-lg", msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300")}>
                            {msg.sender === "bot" ? (
                                <ReactMarkdown>{index === messages.length - 1 ? displayedText : msg.text}</ReactMarkdown>
                            ) : (
                                msg.text
                            )}
                        </div>
                    ))}
                    {isLoading && <div className="animate-pulse text-gray-400">• • •</div>}
                </div>
                <div className="flex rounded-2xl">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                           className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                           placeholder="Envoyer un message..."/>
                    <button onClick={handleSend}
                            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">Envoyer
                    </button>
                </div>
            </div>

            <button onClick={() => setIsOpen((prev) => !prev)}
                    className="z-50 fixed bottom-5 right-5 p-3 bg-gray-50 text-white rounded-full hover:bg-gray-200 flex items-center justify-center">
                <div className="flex">
                    {isOpen ? (
                        <p className="text-black font-bold">{isOpen ? "Fermer" : "Ouvrir"}</p>
                    ) :
                        (
                            <img src={robot} alt="ChatBot" className="w-6 h-6"/>)
                    }
                </div>
            </button>
        </div>
    );
};

export default ChatBox;
