import { Children, createContext, useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdApartment, MdCampaign, MdContactMail, MdDashboard, MdEvent, MdOutlinePostAdd } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    const [teacher, setTeacher] = useState([]);
    const [student, setStudent] = useState([]);

    const [selectedUser, setSelectedUser] = useState([]);

    const [sellItem, setSellItem] = useState([]);

    const [group, setGroup] = useState([]);

    const [post, setPost] = useState([]);

    const [notice, setNotice] = useState([]);

    const [selectedNotice, setSelectedNotice] = useState(null);

    const handleNotice = (id) => {
        const found = notice.find(n => n.id === id);
        setSelectedNotice(found);

        const modal = document.getElementById("notice__modal");
        if (modal) modal.showModal();
    };


    useEffect(() => {
        fetch('/Teachers.json')
            .then(res => res.json())
            .then(data => {
                setTeacher(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        fetch('/Students.json')
            .then(res => res.json())
            .then(data => {
                setStudent(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        fetch('/Posts.json')
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        fetch('/SellItem.json')
            .then(res => res.json())
            .then(data => {
                setSellItem(data)
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        fetch('/Groups.json')
            .then(res => res.json())
            .then(data => {
                setGroup(data)
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch('/Notices.json')
            .then(res => res.json())
            .then(data => {
                setNotice(data)
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, [])


    const closeDrawer = () => {
        const drawer = document.getElementById("menu-drawer");
        if(drawer) drawer.checked = false;
    };




    

    const handleLogin = () => {
        document.getElementById('login_modal').showModal()
    }

    const handleSignUp = () => {
        document.getElementById('signup__modal').showModal()
    }

    const handleViewMore = (user) => {
        setSelectedUser(user);
        document.getElementById('view__more').showModal();
    }

    const sideBar = (
        <>
            <li>
                <NavLink to={"/"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdDashboard className='text-2xl transition-all duration-300' />
                    Dashboard
                </NavLink>
            </li>
            <li>
                <button onClick={handleLogin} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdOutlinePostAdd className='text-2xl transition-all duration-300' />
                    Create Post
                </button>
            </li>
            <li>
                <NavLink to={"/notices"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdCampaign className='text-2xl transition-all duration-300' />
                    Notices
                </NavLink>
            </li>
            <li>
                <NavLink to={"departments"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdApartment className='text-2xl transition-all duration-300' />
                    Departments
                </NavLink>
            </li>
            <li>
                <NavLink to={"/teachers"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <FaChalkboardTeacher className='text-2xl transition-all duration-300' />
                    Teachers
                </NavLink>
            </li>
            <li>
                <NavLink to={"students"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <PiStudentBold className='text-2xl transition-all duration-300' />
                    Students
                </NavLink>
            </li>
            <li>
                <NavLink to={"events"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3'>
                    <MdEvent className='text-2xl transition-all duration-300' />
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink to={"contact"} onClick={closeDrawer} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3'>
                    <MdContactMail className='text-2xl transition-all duration-300' />
                    Contact
                </NavLink>
            </li>
        </>
    )

    const value = {
        loading,
        sideBar,
        teacher,
        student,
        sellItem,
        group,
        post,
        notice,
        selectedNotice,
        handleLogin,
        handleSignUp,
        selectedUser,
        handleViewMore,
        handleNotice
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;