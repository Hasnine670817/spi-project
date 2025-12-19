
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import RightPanel from '../Components/RightPanel';
import LoginModal from '../Components/LoginModal';
import SignUpModal from '../Components/SignUpModal';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <LoginModal></LoginModal>
            <SignUpModal></SignUpModal>
            <main className='pt-2 pb-4'>
                <div className='container-custom'>
                    <div className='relative flex'>
                        <>
                            <Sidebar></Sidebar>
                        </>
                        <div className='w-full lg:w-[375px] xl:w-[545px] mx-auto'>
                            <div className='pt-6 pb-20 lg:py-6'>
                                <Outlet></Outlet>
                            </div>
                        </div>
                        <>
                            <RightPanel></RightPanel>
                        </>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainLayouts;