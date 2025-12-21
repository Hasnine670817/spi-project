
const RightPanel = () => {
    return (
        <aside className="lg:w-[240px] xl:w-[270px] 2xl:w-[320px] hidden lg:block py-6 sticky top-16 h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">

            {/* Upcoming Events */}
            <div className="bg-[#1f1f1f] rounded-xl p-4 mb-4">
                <h3 className="text-white font-semibold mb-3">
                Upcoming Events
                </h3>

                <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        🎉 <span>Cultural Program – 25 Dec</span>
                    </li>
                    <li className="flex items-center gap-2">
                        🏏 <span>Sports Week – January</span>
                    </li>
                    <li className="flex items-center gap-2">
                        📝 <span>Semester Exam – February</span>
                    </li>
                </ul>
            </div>

            {/* Important Notices */}
            <div className="bg-[#1f1f1f] rounded-xl p-4 mb-4">
                <h3 className="text-white font-semibold mb-3">
                Important Notices
                </h3>

                <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        📌 <span>Admission Form Deadline</span>
                    </li>
                    <li className="flex items-center gap-2">
                        📌 <span>Class Routine Updated</span>
                    </li>
                    <li className="flex items-center gap-2">
                        📌 <span>Exam Fee Submission</span>
                    </li>
                </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-[#1f1f1f] rounded-xl p-4 mb-4">
                <h3 className="text-white font-semibold mb-3">
                Quick Links
                </h3>

                <ul className="space-y-2 text-sm text-gray-300">
                    <li className="hover:text-white cursor-pointer">
                        🔗 Academic Calendar
                    </li>
                    <li className="hover:text-white cursor-pointer">
                        🔗 Online Admission
                    </li>
                    <li className="hover:text-white cursor-pointer">
                        🔗 Result Portal
                    </li>
                    <li className="hover:text-white cursor-pointer">
                        🔗 Teachers List
                    </li>
                </ul>
            </div>

            {/* Help Desk */}
            <div className="bg-[#1f1f1f] rounded-xl p-4">
                <h3 className="text-white font-semibold mb-3">
                Help Desk
                </h3>

                <p className="text-sm text-gray-300">
                📞 +880 1XXXXXXXXX
                </p>
                <p className="text-sm text-gray-300">
                📧 info@spi.edu.bd
                </p>
            </div>

        </aside>
    );
};

export default RightPanel;