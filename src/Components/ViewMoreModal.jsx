import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../Context/AppContext";
import { MdAccessTime, MdEmail, MdSchool, MdWork } from "react-icons/md";

const ViewMoreModal = () => {

    const { selectedUser } = useContext(AppContext);

    if (!selectedUser) return null;

    return (
        <dialog id="view__more" className="modal modal-bottom sm:modal-middle bg-black/10 backdrop-blur-md">
            <div className="modal-box max-w-[400px] pt-8 bg-[#252728]">

                {/* Close Button */}
                <form method="dialog">
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-gray text-white/60 flex items-center justify-center hover:text-white">
                        <IoMdClose />
                    </button>
                </form>

                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                    <div>
                        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                            {selectedUser?.name?.charAt(0)}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">
                            {selectedUser.name}
                        </h2>
                        <p className="text-sm text-gray-400 capitalize">
                            {selectedUser.designation || selectedUser.role}
                        </p>
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-3 text-sm">

                    <div className="flex items-center gap-3">
                        <MdSchool className="text-blue-500 text-lg" />
                        <div>
                            <p className="text-gray-400">Department</p>
                            <p>{selectedUser.department}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <MdWork className="text-blue-500 text-lg" />
                        <div>
                            <p className="text-gray-400">Faculty</p>
                            <p>{selectedUser.faculty || selectedUser.role}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <MdAccessTime className="text-blue-500 text-lg" />
                        <div>
                            <p className="text-gray-400">Shift</p>
                            <p>{selectedUser.shift}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <MdEmail className="text-blue-500 text-lg" />
                        <div>
                            <p className="text-gray-400">Email</p>
                            <p className="break-all">{selectedUser.email || "N/A"}</p>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-between items-center text-xs text-gray-400">
                    <span>Batch/Roll: {selectedUser.batch || selectedUser.roll}</span>
                    <span className="uppercase tracking-wide">
                        ID: {selectedUser.id}
                    </span>
                </div>
            </div>
        </dialog>
    );
};

export default ViewMoreModal;