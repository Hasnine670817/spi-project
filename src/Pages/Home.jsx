import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import { FaComment, FaPlus, FaShare, FaThumbsUp } from "react-icons/fa";
import NoticesDetails from "../Components/NoticesDetails";

const Home = () => {

    const { loading, post, notice, handleNotice } = useContext(AppContext);

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

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
                {notice.map(not => (
                    <div
                        key={not.id}
                        className="min-w-[180px] h-[180px] rounded-xl p-4 flex flex-col justify-between
                                shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-white/10"
                        style={{ background: `linear-gradient(135deg, ${not.color} 0%, #00000020 100%)` }}
                    >
                        {/* Notice Title */}
                        <h4 className="text-sm font-semibold leading-snug text-white line-clamp-2">
                            {not.title}
                        </h4>

                        <div className="flex items-center justify-between mt-2">
                            {/* Date */}
                            <p className="text-xs text-gray-300">
                                {not.date}
                            </p>
                            <button onClick={() => handleNotice(not.id)} type="button" className="text-xs text-royal-blue hover:underline">See more</button>
                        </div>
                    </div>

                ))}

            </div>
            

            {/* POSTS FEED */}
            <div className="space-y-4">

                {post.map(p => (
                    <div
                        key={p.id}
                        className="bg-[#1f1f1f] border border-white/10 rounded-2xl p-3 sm:p-4 pb-2 sm:pb-2"
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
                        <div className="pt-2 pb-4 space-y-3">
                            {/* Post Text */}
                            <p className="text-gray-300">
                                {p.text}
                            </p>

                            {/* Post Image (if any) */}
                            {p.image && (
                                <div className="h-52 3xxl:h-60 3xxxl:h-70 4xl:h-80 rounded-xl bg-[#2a2a2a]">
                                    <img className="w-full h-full rounded-xl flex justify-center items-center" src={p.img} alt="Post Image" />
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-sm sm:text-base">

                            <button className="flex items-center gap-2 px-4 py-2 3xl:px-8 3xxl:px-10 4xl:px-12 rounded-lg hover:bg-white/5">
                                <FaThumbsUp /> Like
                            </button>

                            <button className="flex items-center gap-2 px-4 py-2 3xl:px-8 3xxl:px-10 4xl:px-12 rounded-lg hover:bg-white/5">
                                <FaComment /> Comment
                            </button>

                            <button className="flex items-center gap-2 px-4 py-2 3xl:px-8 3xxl:px-10 4xl:px-12 rounded-lg hover:bg-white/5">
                                <FaShare /> Share
                            </button>

                        </div>

                    </div>
                ))}

            </div>

            <NoticesDetails></NoticesDetails>

        </div>
    );
};

export default Home;