import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../Context/AppContext";

const SignUpModal = () => {

    const { handleLogin } = useContext(AppContext);

    return (
        <>
            <dialog id="signup__modal" className="modal modal-bottom sm:modal-middle bg-black/10 backdrop-blur-md">
                <div className="modal-box max-w-[400px] pt-3 bg-[#252728]">
                    <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
                    <form className="pt-4">
                        <fieldset className="fieldset">
                            <label className="label text-sm" htmlFor="name">Name</label>
                            <input id="name" type="name" className="input w-full bg-transparent border border-white/30 mb-2" placeholder="Name" />
                            <label className="label text-sm" htmlFor="email1">Email</label>
                            <input id="email1" type="email" className="input w-full bg-transparent border border-white/30 mb-2" placeholder="Email" />
                            <label htmlFor="password1" className="label text-sm">Password</label>
                            <input id="password1" type="password" className="input w-full bg-transparent border border-white/30 mb-2" placeholder="Password" />
                            <label htmlFor="address" className="label text-sm">Address</label>
                            <input id="address" type="text" className="input w-full bg-transparent border border-white/30 mb-2" placeholder="Address" />
                            <label htmlFor="number" className="label text-sm">Phone</label>
                            <input id="number" type="tel" className="input w-full bg-transparent border border-white/30" placeholder="Phone Number" />
                            <button className="btn btn-neutral border-0 bg-royal-blue hover:bg-royal-blue/70 mt-4">Sign Up</button>
                            <div className="text-sm text-center mt-1">
                                Don't have any account? 
                                <button type="button" onClick={handleLogin} className="link link-hover ms-1 text-royal-blue">Login</button>
                            </div>
                        </fieldset>
                    </form>
                    <div className="modal-action m-0">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="text-xl w-8 h-8 rounded-full bg-dark-gray text-white/60 flex items-center justify-center absolute top-3 right-3">
                                <IoMdClose />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SignUpModal;