import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div className="container">
                    <AiOutlineHome className="icon"/>
                    <AiOutlineUser className="icon"/>
                    <AiOutlineBook className="icon"/>
                    <RiServiceLine className="icon"/>
                    <AiOutlineMessage className="icon"/>
                </div>
            </div>
        </>
    );
}

export default Navbar;