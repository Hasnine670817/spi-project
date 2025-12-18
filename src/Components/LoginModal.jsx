import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../Context/AppContext";

const LoginModal = () => {

    const { handleSignUp } = useContext(AppContext)

    return (
        <>
            <dialog id="login_modal" className="modal modal-bottom sm:modal-middle bg-black/10 backdrop-blur-md">
                <div className="modal-box max-w-[400px] pt-3 bg-[#252728]">
                    <h2 className="text-center text-2xl font-semibold">Login</h2>
                    <form className="pt-4">
                        <fieldset className="fieldset">
                            <label className="label text-sm" htmlFor="email">Email</label>
                            <input id="email" type="email" className="input w-full bg-transparent border border-white/30 mb-2" placeholder="Email" />
                            <label htmlFor="password" className="label text-sm">Password</label>
                            <input id="password" type="password" className="input w-full bg-transparent border border-white/30 mb-2" placeholder="Password" />
                            <div><a className="link link-hover text-sm">Forgot password?</a></div>
                            <button className="btn btn-neutral border-0 bg-royal-blue hover:bg-royal-blue/70 mt-4">Login</button>
                            <div className="text-sm text-center mt-1">
                                Already have an account? 
                                <button type="button" onClick={handleSignUp} className="link link-hover ms-1 text-royal-blue">Sign Up</button>
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

export default LoginModal;