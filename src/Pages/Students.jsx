import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import ViewMoreModal from "../Components/ViewMoreModal";

const Students = () => {

    const { student, handleViewMore } = useContext(AppContext);
    
        const [selectedCategory, setSelectedCategory] = useState("all");
    
        const [currentPage, setCurrentPage] = useState(1);
        const usersPerPage = 8;
    
        const handleCategoryBtn = (category) => {
            setSelectedCategory(category);
        }
    
        const filteredStudents = selectedCategory === "all" ? student : 
            student.filter(t => t.category === selectedCategory);
    
        // Pagination logic
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentTeachers = filteredStudents.slice(indexOfFirstUser, indexOfLastUser);
        const totalPages = Math.ceil(filteredStudents.length / usersPerPage);
    
        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

    return (
        <div className="bg-[#121212] min-h-[calc(100vh-140px)] p-4 lg:p-6 rounded-xl">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-white text-xl font-semibold">
                    Students
                </h2>
                <p className="text-gray-400 text-sm">
                    All SPI Student list
                </p>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button onClick={() => handleCategoryBtn("all")} className={`px-4 py-2 rounded-xl text-sm capitalize ${selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-[#1f1f1f] text-gray-300 hover:bg-white/10" }`}>all</button>
                {
                    [...new Set(student.map(t => t.category))].map((category, idx) => (
                        <button onClick={() => handleCategoryBtn(category)} className={`px-4 py-2 rounded-xl text-sm capitalize ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-[#1f1f1f] text-gray-300 hover:bg-white/10" }`} key={idx}>{category}</button>
                    ))
                }
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4">
                {currentTeachers.map((user) => (
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

export default Students;