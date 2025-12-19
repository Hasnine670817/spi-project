import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/images/logo.png";
import { FaBars, FaSearch, FaUserAlt } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { GiDamagedHouse } from 'react-icons/gi';
import { IoChatbox, IoSearchSharp } from 'react-icons/io5';
import { MdGroupWork } from 'react-icons/md';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { IoMdClose } from 'react-icons/io';

const Header = () => {

    const { sideBar, handleLogin, handleSignUp } = useContext(AppContext);

    const navBar = (
        <>
            <li className='list-none'>
                <NavLink to="/" className="py-3 xl:py-4 relative inline-block px-4 lg:px-6 xl:px-10 rounded-xl mt-2 tooltip lg:tooltip-bottom tooltip-top tooltip-white hover:bg-white/10 nav-link" data-tip="Home">
                    <FaHouse />
                </NavLink>
            </li>
            <li className='list-none'>
                <NavLink to="/chat" className="py-3 xl:py-4 relative inline-block px-4 lg:px-6 xl:px-10 rounded-xl mt-2 tooltip lg:tooltip-bottom tooltip-top tooltip-white hover:bg-white/10 nav-link" data-tip="Chat">
                    <IoChatbox />
                </NavLink>
            </li>
            <li className='list-none'>
                <NavLink to="/users" className="py-3 xl:py-4 relative inline-block px-4 lg:px-6 xl:px-10 rounded-xl mt-2 tooltip lg:tooltip-bottom tooltip-top tooltip-white hover:bg-white/10 nav-link" data-tip="Users">
                    <FaUserAlt />
                </NavLink>
            </li>
            <li className='list-none'>
                <NavLink to="/marketPlace" className="py-3 xl:py-4 relative inline-block px-4 lg:px-6 xl:px-10 rounded-xl mt-2 tooltip lg:tooltip-bottom tooltip-top tooltip-white hover:bg-white/10 nav-link" data-tip="Market Place">
                    <GiDamagedHouse />
                </NavLink>
            </li>
            <li className='list-none'>
                <NavLink to="/group" className="py-3 xl:py-4 relative inline-block px-4 lg:px-6 xl:px-10 rounded-xl mt-2 tooltip lg:tooltip-bottom tooltip-top tooltip-white hover:bg-white/10 nav-link" data-tip="Group">
                    <MdGroupWork />
                </NavLink>
            </li>
        </>
    )

    return (
        <header className='bg-main-2 sticky top-0 z-50 border-b border-white/10'>
            <div className='container-custom'>
                <nav className='flex justify-between items-center lg:grid lg:grid-cols-[250px_auto_250px] xl:grid-cols-[300px_auto_300px]'>
                    <div className='flex gap-4 items-center'>
                        <Link to={"/"}>
                            <img className='max-w-[80px]' src={Logo} alt="logo" />
                        </Link>
                        <form className='hidden lg:block'>
                            <label className='relative'>
                                <span className='absolute left-4 top-1.5 text-white/80 z-10'><IoSearchSharp /></span>
                                <input className='input bg-[#333334] border-0 shadow-none rounded-full placeholder:text-white/60 w-[220px] lg:w-[180px] xl:w-[220px] px-5 ps-10' type="search" name="search" id="search" placeholder='Search...' />
                            </label>
                        </form>
                    </div>
                    <ul className='fixed border-t bg-[#252728] lg:bg-transparent border-white/20 lg:border-0 px-5 lg:px-0 w-full justify-between bottom-0 left-0 lg:static flex gap-2 items-center lg:justify-center text-2xl text-white/70 header-list'>
                        {navBar}
                    </ul>
                    <div className='hidden lg:flex items-center justify-end gap-2'>
                        <button onClick={handleLogin} className='btn bg-royal-blue border-0 shadow-none text-white rounded-lg hover:bg-royal-blue/80'>Login</button>
                        <button onClick={handleSignUp} className='btn bg-dark-gray border-0 shadow-none text-white rounded-lg hover:bg-dark-gray/80'>Sign Up</button>
                    </div>
                    <div className='flex gap-2 items-center lg:hidden'>
                        <button type="button" className='w-10 h-10 sm:hidden rounded-full bg-dark-gray flex items-center justify-center text-white/70 hover:bg-dark-gray/80'><FaSearch /></button>
                        <form className='hidden sm:block'>
                            <label className='relative'>
                                <span className='absolute left-4 top-1.5 text-white/80 z-10'><IoSearchSharp /></span>
                                <input className='input bg-[#333334] border-0 shadow-none rounded-full placeholder:text-white/60 w-[220px] px-5 ps-10' type="search" name="search" id="search" placeholder='Search...' />
                            </label>
                        </form>

                        <div className="drawer block w-auto">
                            <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="menu-drawer" className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center text-white/70 cursor-pointer hover:bg-dark-gray/80 transition-all duration-300">
                                    <FaBars />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="menu-drawer" aria-label="close sidebar" className="drawer-overlay bg-white/10"></label>
                                <div className='menu bg-main min-h-full w-80 pt-1 p-4'>
                                    <div className='flex items-center justify-between pb-4'>
                                        <Link to="/"><img className='max-w-[80px]' src={Logo} alt="logo" /></Link>
                                        <label htmlFor="menu-drawer" aria-label="close sidebar" className="text-white/80 cursor-pointer text-2xl hover:text-white transition-all duration-300">
                                            <IoMdClose />
                                        </label>
                                    </div>
                                    <form className='mb-4 sm:hidden'>
                                        <label className='relative'>
                                            <span className='absolute left-4 top-1 text-white/80 z-10 text-base'><IoSearchSharp /></span>
                                            <input className='input bg-[#333334] border-0 shadow-none rounded-full placeholder:text-white/60 w-full px-5 ps-10' type="search" name="search" id="search" placeholder='Search...' />
                                        </label>
                                    </form>
                                    <ul>
                                        {/* Sidebar content here */}
                                        {sideBar}
                                    </ul>
                                    <div className='grid grid-cols-2 gap-2 pt-4'>
                                        <button onClick={handleLogin} className='btn w-full bg-royal-blue border-0 shadow-none text-white rounded-lg hover:bg-royal-blue/80'>Login</button>
                                        <button onClick={handleSignUp} className='btn w-full bg-dark-gray border-0 shadow-none text-white rounded-lg hover:bg-dark-gray/80'>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;