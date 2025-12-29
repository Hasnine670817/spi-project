import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const GroupOverview = () => {
    const { group, handleLogin } = useContext(AppContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleChat = () => {
        navigate(`/chat`)
    }

    const filteredGroup = group.find(g => g.id === parseInt(id));

    if (!filteredGroup) return <p className="text-white p-4">Group not found.</p>;

    return (
        <div className="bg-[#121212] min-h-[calc(100vh-140px)] p-4 md:p-6 lg:p-8 rounded-2xl">
            
            {/* Banner */}
            <div className="relative rounded-xl overflow-hidden mb-6">
                <div className="h-48 w-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 text-sm">
                    <img src={filteredGroup.bannerImg} className="w-full h-full" alt="Group Banner" />
                </div>
                <div className="absolute bottom-3 left-4 xl:bottom-4 xl:left-6 text-white">
                    <h1 className="text-xl xl:text-2xl font-bold">{filteredGroup.name}</h1>
                    <p className="text-sm text-gray-400">{filteredGroup.type} Group</p>
                </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-[#1f1f1f] p-4 rounded-xl flex-1 text-center">
                    <p className="text-gray-400 text-sm">Members</p>
                    <p className="text-white font-semibold">{filteredGroup.members}</p>
                </div>
                <div className="bg-[#1f1f1f] p-4 rounded-xl flex-1 text-center">
                    <p className="text-gray-400 text-sm">Type</p>
                    <p className="text-blue-400 font-semibold">{filteredGroup.type}</p>
                </div>
            </div>

            {/* Description */}
            <div className="bg-[#1f1f1f] p-6 rounded-xl mb-6">
                <h2 className="text-white font-semibold mb-2 text-lg">About Group</h2>
                <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xl:gap-4">
                <button onClick={() => navigate(-1)} className="flex-1 bg-[#444] hover:bg-[#555] py-2 rounded-lg text-gray-200 text-sm flex items-center gap-3 justify-center">
                    <FaArrowLeftLong />
                    Back
                </button>                
                <button onClick={handleChat} className="flex-1 bg-[#2a2a2a] hover:bg-white/10 py-2 rounded-lg text-gray-300 text-sm">
                    Message Admin
                </button>      
                <button onClick={handleLogin} className="flex-1 col-span-2 sm:col-span-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white text-sm">
                    Join Group
                </button>          
            </div>
        </div>
    );
};

export default GroupOverview;
