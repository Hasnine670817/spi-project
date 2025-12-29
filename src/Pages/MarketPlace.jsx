import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";

const MarketPlace = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const { sellItem, loading } = useContext(AppContext);

    const navigate = useNavigate();

    const categories = [
        "All",
        "Books",
        "Electronics",
        "Accessories",
        "Lab Equipment",
    ];

    const filteredItems =
        activeCategory === "All"
            ? sellItem
            : sellItem.filter(
                (item) => item.category === activeCategory
            );

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

    return (
        <div className="bg-[#121212] min-h-[calc(100vh-140px)] p-4 lg:p-6 rounded-xl">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div>
                    <h2 className="text-white text-xl font-semibold">
                        Marketplace
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Buy & Sell within Sherpur Polytechnic Institute
                    </p>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white text-sm">
                    + Sell Item
                </button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-sm ${
                            activeCategory === cat
                                ? "bg-blue-600 text-white"
                                : "bg-[#1f1f1f] text-gray-300 hover:bg-white/10"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#1f1f1f] rounded-xl p-4 hover:bg-white/5 transition"
                    >
                        {/* Image Placeholder */}
                        <div className="h-36 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-gray-500 text-sm mb-3 p-4">
                            <img className="max-h-full" src={item.img} alt="Item Image" />
                        </div>

                        <h3 className="text-white font-medium text-sm mb-1">
                            {item.title}
                        </h3>

                        <p className="text-blue-500 font-semibold text-sm mb-1">
                            ৳ {item.price}
                        </p>

                        <p className="text-gray-400 text-xs mb-3">
                            Seller: {item.seller}
                        </p>

                        <div className="flex gap-2">
                            <button onClick={() => navigate(`${item.id}`)} className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white text-xs">
                                View
                            </button>
                            <button onClick={() => navigate(`/chat?seller=${item.seller}`)} className="flex-1 bg-[#2a2a2a] hover:bg-white/10 py-2 rounded-lg text-gray-300 text-xs">
                                Chat
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MarketPlace;