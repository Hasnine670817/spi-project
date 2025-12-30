import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AppContext } from '../Context/AppContext';
import { FaDownload } from 'react-icons/fa';

const NoticesDetails = () => {

    const { selectedNotice } = useContext(AppContext);

    return (
        <dialog id="notice__modal" className="modal modal-bottom sm:modal-middle bg-black/10 backdrop-blur-md">
            <div className="modal-box max-w-[400px] pt-6 pb-4 px-6 bg-[#252728] rounded-2xl relative">
                {/* Close Button */}
                <form method="dialog">
                    <button className="text-xl w-8 h-8 rounded-full bg-dark-gray text-white/60 flex items-center justify-center absolute top-4 right-4">
                        <IoMdClose />
                    </button>
                </form>

                {selectedNotice ? (
                    <div className="space-y-5">
                        {/* Title */}
                        <h2 className="text-xl font-bold text-white">{selectedNotice.title}</h2>

                        {/* Type & Date */}
                        <div className="flex justify-between items-center mt-2">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                selectedNotice.type === "Important" ? "bg-red-600 text-white" :
                                selectedNotice.type === "Reminder" ? "bg-yellow-500 text-black" :
                                selectedNotice.type === "Urgent" ? "bg-orange-500 text-white" :
                                "bg-gray-600 text-white"
                            }`}>
                                {selectedNotice.type}
                            </span>

                            <span className="text-xs text-gray-400">{selectedNotice.date}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mt-2">
                            {selectedNotice.description}
                        </p>

                        <button type='button' className='btn text-sm font-medium bg-royal-blue border-0 shadow-none text-white rounded-lg hover:bg-royal-blue/80 h-9 flex gap-2 items-center'><FaDownload /> Download PDF</button>
                    </div>
                ) : (
                    <p className="text-gray-400 text-center mt-4">Notice not found</p>
                )}
            </div>

        </dialog>
    );
};

export default NoticesDetails;