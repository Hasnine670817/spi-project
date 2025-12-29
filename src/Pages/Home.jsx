import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import { FaComment, FaPlus, FaShare, FaThumbsUp } from "react-icons/fa";

const Home = () => {

    const { loading, post } = useContext(AppContext);

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

    // ---- Notice Data ----
    const notices = [
        {
            id: 1,
            title: "Exam Routine PublishedAll the students who fail to deposit money in Sure Cash are instructed to deposit money directly through receipt in the register branch and account branch.",
            type: "Important",
            date: "07 Dec 2025",
            color: "#2a2a2a"
        },
        {
            id: 2,
            title: "Lab Test Tomorrow",
            type: "Reminder",
            date: "30 Dec 2025",
            color: "#1f1f1f"
        },
        {
            id: 3,
            title: "Class Cancel – 7th Semester",
            type: "Urgent",
            date: "Today",
            color: "#2a2a2a"
        },
        {
            id: 4,
            title: "Department Meeting",
            type: "General",
            date: "1 Jan 2026",
            color: "#1f1f1f"
        }
    ];


    return (
        <div className="space-y-6">

            {/* NOTICE SLIDER */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">

                {/* Add Notice Card (Admin Future Option) */}
                <div className="min-w-[140px] h-[180px] rounded-2xl bg-[#1f1f1f] 
                    border border-white/10 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center 
                        justify-center text-white mb-2">
                        <FaPlus />
                    </div>
                    <p className="text-sm text-gray-300">Notice Board</p>
                </div>

                {/* Dynamic Notices */}
                {notices.map(notice => (
                    <div
                        key={notice.id}
                        className="min-w-[140px] h-[180px] rounded-2xl border 
                            border-white/10 p-3 flex flex-col justify-between"
                        style={{ background: notice.color }}
                    >

                        {/* Notice Type Badge */}
                        {/* <span className={`text-xs px-2 py-1 rounded-lg w-fit
                            ${notice.type === "Urgent" ? "bg-red-600 text-white"
                            : notice.type === "Important" ? "bg-yellow-600 text-white"
                            : "bg-white/10 text-gray-300"}`}>
                            {notice.type}
                        </span> */}

                        {/* Notice Title */}
                        <h4 className="text-sm font-medium leading-tight truncate line-clamp-2">
                            {notice.title}
                        </h4>

                        {/* Date */}
                        <p className="text-xs text-gray-400">
                            {notice.date}
                        </p>

                    </div>
                ))}

            </div>
            

            {/* POSTS FEED */}
            <div className="space-y-4">

                {post.map(p => (
                    <div
                        key={p.id}
                        className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-4 pb-2"
                    >

                        {/* Post Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">{p.author.split(" ")[0].charAt(0)}</div>

                            <div>
                                <h4 className="font-medium">{p.author}</h4>
                                <p className="text-xs text-gray-400">
                                    {p.dept} • {p.time}
                                </p>
                            </div>
                        </div>

                        {/* post container */}
                        <div className="pt-2 pb-4">
                            {/* Post Text */}
                            <p className="text-gray-300 mb-3">
                                {p.text}
                            </p>

                            {/* Post Image (if any) */}
                            {p.image && (
                                <div className="h-52 rounded-xl bg-[#2a2a2a]">
                                    <img className="w-full h-full rounded-xl flex justify-center items-center" src={p.img} alt="Post Image" />
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between border-t border-white/10 pt-2">

                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
                                <FaThumbsUp /> Like
                            </button>

                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
                                <FaComment /> Comment
                            </button>

                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
                                <FaShare /> Share
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Home;