
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import ViewMoreModal from "../Components/ViewMoreModal";


const Users = () => {
    const [filter, setFilter] = useState("Teacher");

    const { teacher, student, handleViewMore } = useContext(AppContext);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8;

    // Determine which users to show based on filter
    const filteredUsers = () => {
        if (filter === "Teacher") return teacher;
        if (filter === "Student") return student;
        // if (filter === "Staff") return staff;
        return [];
    };

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers().slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers().length / usersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-[#121212] min-h-[calc(100vh-64px)] p-4 lg:p-6 rounded-xl">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-white text-xl font-semibold">
                    Users
                </h2>
                <p className="text-gray-400 text-sm">
                    Students, Teachers & Staff Directory
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
                {["Teacher", "Student", "Staff"].map((role) => (
                    <button
                        key={role}
                        onClick={() => setFilter(role)}
                        className={`px-4 py-2 rounded-xl text-sm ${
                            filter === role
                                ? "bg-blue-600 text-white"
                                : "bg-[#1f1f1f] text-gray-300 hover:bg-white/10"
                        }`}
                    >
                        {role}
                    </button>
                ))}
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {currentUsers.map((user) => (
                    <div
                        key={user.id}
                        className="bg-[#1f1f1f] p-4 rounded-xl hover:bg-white/5 transition"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mb-3">
                            {user.name.charAt(0)}
                        </div>

                        <h3 className="text-white font-medium">
                            {user.name}
                        </h3>

                        <p className="text-gray-400 text-sm">
                            {user.role}
                        </p>

                        <p className="text-gray-500 text-xs mt-1">
                            {user.department}
                        </p>

                        <button type="button" onClick={() => handleViewMore(user)} className="mt-3 text-sm text-blue-500 hover:underline">
                            View More
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded-md text-sm ${
                                currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "bg-[#1f1f1f] text-gray-300 hover:bg-white/10"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}

            <ViewMoreModal></ViewMoreModal>

        </div>
    );
};

export default Users;
