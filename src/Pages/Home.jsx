import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";

const Home = () => {

    const { user, loading } = useContext(AppContext);

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

    return (
        <div>
            <h2>Home: {user.length}</h2>
        </div>
    );
};

export default Home;