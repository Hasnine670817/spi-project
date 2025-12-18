import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Home = () => {

    const { user, loading } = useContext(AppContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-red-600"></span>
            </div>
        );
    }

    return (
        <div>
            <h2>Home: {user.length}</h2>
        </div>
    );
};

export default Home;