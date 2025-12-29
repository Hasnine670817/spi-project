
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";

const chatUsers = [
    {
        id: 1,
        name: "CMT 7th Semester Group",
        lastMsg: "Exam routine uploaded",
    },
    {
        id: 2,
        name: "Exam Controller Office",
        lastMsg: "Admit card available",
    },
    {
        id: 3,
        name: "Class Representative",
        lastMsg: "Tomorrow class at 9 AM",
    },
];

const messagesData = {
    1: [
        { from: "them", text: "Exam routine uploaded" },
        { from: "me", text: "Thanks sir" },
    ],
    2: [
        { from: "them", text: "Admit card released" },
        { from: "me", text: "Received" },
    ],
    3: [
        { from: "them", text: "Tomorrow class at 9 AM" },
    ],
};

const Chat = () => {
    const [activeChat, setActiveChat] = useState(chatUsers[0]);
    const [showChatWindow, setShowChatWindow] = useState(false);

    const { loading } = useContext(AppContext);

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

    return (
        <div className="flex h-[calc(100vh-190px)] lg:h-[calc(100vh-140px)] bg-[#121212] rounded-xl overflow-hidden">

            {/* LEFT SIDEBAR */}
            <div
                className={`w-full md:w-[300px] lg:w-full xl:w-[300px] md:border-r border-white/10 bg-[#1a1a1a]
                ${showChatWindow ? "hidden md:block lg:hidden xl:block" : "block"}`}
            >
                <h2 className="text-white font-semibold p-4">
                    Live Chats
                </h2>

                {chatUsers.map((chat) => (
                    <div
                        key={chat.id}
                        onClick={() => {
                            setActiveChat(chat);
                            setShowChatWindow(true);
                        }}
                        className={`p-4 cursor-pointer hover:bg-white/10 ${
                            activeChat.id === chat.id ? "bg-white/10" : ""
                        }`}
                    >
                        <p className="text-white text-sm font-medium">
                            {chat.name}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                            {chat.lastMsg}
                        </p>
                    </div>
                ))}
            </div>

            {/* CHAT WINDOW */}
            <div
                className={`flex-1 flex flex-col
                ${showChatWindow ? "block" : "hidden md:flex lg:hidden xl:flex"}`}
            >

                {/* Header */}
                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                    <button
                        onClick={() => setShowChatWindow(false)}
                        className="md:hidden lg:block xl:hidden text-white text-lg"
                    >
                        ←
                    </button>

                    <h3 className="text-white font-semibold">
                        {activeChat.name}
                    </h3>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                    {messagesData[activeChat.id]?.map((msg, index) => (
                        <div
                            key={index}
                            className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                                msg.from === "me"
                                    ? "bg-blue-600 text-white ml-auto"
                                    : "bg-[#1f1f1f] text-gray-200"
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/10 flex gap-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-[#1f1f1f] text-white text-sm px-4 py-2 rounded-xl outline-none"
                    />
                    <button className="bg-blue-600 px-4 py-2 rounded-xl text-white text-sm">
                        Send
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Chat;
