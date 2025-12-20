import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Sidebar = () => {

    const { sideBar } = useContext(AppContext)

    return (
        <>
            <aside className='sticky hidden lg:block lg:w-[240px] xl:w-[270px] 2xl:w-[320px] top-16 h-[calc(100vh-100px)] overflow-y-auto py-6'>
                <ul className='sidebar__ul'>
                    {sideBar}
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;