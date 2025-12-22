import { Children, createContext, useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdApartment, MdCampaign, MdContactMail, MdDashboard, MdEvent } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const [teacher, setTeacher] = useState([]);
    const [student, setStudent] = useState([]);

    const [selectedUser, setSelectedUser] = useState([]);

    const [sellItem, setSellItem] = useState([]);

    const [group, setGroup] = useState([]);

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
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUser(data);
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



    const sideBar = (
        <>
            <li>
                <NavLink to={"/"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdDashboard className='text-2xl transition-all duration-300' />
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to={"/notices"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdCampaign className='text-2xl transition-all duration-300' />
                    Notices
                </NavLink>
            </li>
            <li>
                <NavLink to={"departments"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <MdApartment className='text-2xl transition-all duration-300' />
                    Departments
                </NavLink>
            </li>
            <li>
                <NavLink to={"/teachers"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <FaChalkboardTeacher className='text-2xl transition-all duration-300' />
                    Teachers
                </NavLink>
            </li>
            <li>
                <NavLink to={"students"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3 mb-2 side__link'>
                    <PiStudentBold className='text-2xl transition-all duration-300' />
                    Students
                </NavLink>
            </li>
            <li>
                <NavLink to={"events"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3'>
                    <MdEvent className='text-2xl transition-all duration-300' />
                    Events
                </NavLink>
            </li>
            <li>
                <NavLink to={"contact"} className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/60 flex items-center gap-3'>
                    <MdContactMail className='text-2xl transition-all duration-300' />
                    Contact
                </NavLink>
            </li>
        </>
    )

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

    const value = {
        user,
        loading,
        sideBar,
        teacher,
        student,
        sellItem,
        group,
        handleLogin,
        handleSignUp,
        selectedUser,
        handleViewMore
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;