
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
            <main className='pt-2 pb-2'>
                <div className='container-custom'>
                    <div className='relative flex'>
                        <>
                            <Sidebar></Sidebar>
                        </>
                        <div className='w-full lg:w-[400px] xl:w-[545px] 2xxl:w-[700px] 3xl:w-[800px] 3xxl:w-[900px] 3xxxl:w-[1000px] mx-auto'>
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