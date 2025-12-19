import { Children, createContext, use, useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdApartment, MdCampaign, MdContactMail, MdDashboard, MdEvent } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const [teacher, setTeacher] = useState([]);
    const [student, setStudent] = useState([]);

    const [selectedUser, setSelectedUser] = useState([]);

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



    const sideBar = (
        <>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3 mb-2'>
                    <MdDashboard className='text-2xl transition-all duration-300' />
                    Dashboard
                </Link>
            </li>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3 mb-2'>
                    <MdCampaign className='text-2xl transition-all duration-300' />
                    Notices
                </Link>
            </li>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3 mb-2'>
                    <MdApartment className='text-2xl transition-all duration-300' />
                    Departments
                </Link>
            </li>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3 mb-2'>
                    <FaChalkboardTeacher className='text-2xl transition-all duration-300' />
                    Teachers
                </Link>
            </li>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3 mb-2'>
                    <PiStudentBold className='text-2xl transition-all duration-300' />
                    Students
                </Link>
            </li>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3'>
                    <MdEvent className='text-2xl transition-all duration-300' />
                    Events
                </Link>
            </li>
            <li>
                <Link className='w-full rounded-md px-4 py-3 text-base hover:bg-dark-gray/80 flex items-center gap-3'>
                    <MdContactMail className='text-2xl transition-all duration-300' />
                    Contact
                </Link>
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