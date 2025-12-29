import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";


const Group = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("All");

    const { group, handleLogin } = useContext(AppContext);

    const filteredGroups =
        filter === "All"
            ? group
            : group.filter(
                (g) => g.type === filter
            );

    return (
        <div className="bg-[#121212] min-h-[calc(100vh-64px)] p-4 lg:p-6 rounded-xl">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-white text-xl font-semibold">
                    Groups
                </h2>
                <p className="text-gray-400 text-sm">
                    Connect with departments, clubs & official groups
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                {["All", "Department", "Club", "Course", "Official"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-xl text-sm ${
                            filter === type
                                ? "bg-blue-600 text-white"
                                : "bg-[#1f1f1f] text-gray-300 hover:bg-white/10"
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4">
                {filteredGroups.map((group) => (
                    <div
                        key={group.id}
                        className="bg-[#1f1f1f] hover:bg-white/5 transition border border-[#E2E5E9]/20 rounded-xl"
                    >
                        {/* Group Banner */}
                        <div className="h-36 rounded-t-xl bg-[#2a2a2a] mb-2 flex items-center justify-center text-gray-500 text-sm">
                            <img className="w-full h-full rounded-t-xl flex justify-center items-center hover:grayscale-30 transition-all duration-200" src={group.bannerImg} alt="Group Banner" />
                        </div>

                        <div className="p-3 pt-0">
                            <h3 className="text-white font-medium mb-1 truncate">
                                {group.name}
                            </h3>

                            <div className="flex items-center justify-between text-xs mb-3">
                                <span className="text-gray-400">
                                    {group.members} members
                                </span>

                                <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                                    {group.type}
                                </span>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => navigate(`/group/${group.id}`)}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white text-xs"
                                >
                                    View
                                </button>

                                <button onClick={handleLogin} className="flex-1 bg-[#2a2a2a] hover:bg-white/10 py-2 rounded-lg text-gray-300 text-xs">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default Group;