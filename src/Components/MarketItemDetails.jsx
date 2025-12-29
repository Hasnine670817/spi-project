import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { FaArrowLeftLong } from "react-icons/fa6";

const MarketItemDetails = () => {

    const { id } = useParams();
    const { sellItem } = useContext(AppContext);

    const navigate = useNavigate();

    const item = sellItem.find(
        (item) => item.id.toString() === id
    );

    if (!item) {
        return (
            <p className="text-white p-6">
                Item not found
            </p>
        );
    }

    return (
        <div className="bg-[#121212] min-h-[calc(100vh-140px)] p-3 sm:p-6 rounded-xl">

            <div className="max-w-3xl mx-auto bg-[#1f1f1f] p-3 sm:p-6 rounded-xl">
                <div className="h-60 bg-[#2a2a2a] rounded-lg mb-4 flex items-center justify-center text-gray-500 p-6">
                    <img className="max-h-full" src={item.img} alt="Item Image" />
                </div>

                <h2 className="text-white text-xl font-semibold mb-2 truncate" title={item.title}>
                    {item.title}
                </h2>

                <p className="text-blue-500 text-lg font-semibold mb-2">
                    ৳ {item.price}
                </p>

                <p className="text-gray-400 text-sm mb-4">
                    Seller: {item.seller}
                </p>

                <div className="flex items-center justify-between">
                    <button onClick={() => navigate(-1)} className="bg-[#2a2a2a] hover:bg-white/10 py-2 px-5 rounded-lg text-gray-300 text-sm flex gap-2 items-center">
                        <FaArrowLeftLong />
                        Back
                    </button>
                    <button onClick={() => navigate(`/chat?seller=${item.seller}`)} className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white text-sm">
                        Chat with Seller
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MarketItemDetails;
