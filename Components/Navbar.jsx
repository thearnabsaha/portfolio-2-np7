import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div className="container">
                    <a href="#"><AiOutlineHome className="icon active"/></a>
                    <a href="#about"><AiOutlineUser className="icon"/></a>
                    <a href="#experience"><AiOutlineBook className="icon"/></a>
                    <a href="#portfolio"><RiServiceLine className="icon"/></a>
                    <a href="#contact"><AiOutlineMessage className="icon"/></a>
                </div>
            </div>
        </>
    );
}

export default Navbar;