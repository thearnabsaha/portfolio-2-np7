import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
useState
const Navbar = () => {
    const [first, setFirst] = useState("#")
    return (
        <>
            <div id="navbar">
                <div className="container">
                    <a href="#"><AiOutlineHome id="icon" className={first === "#" ? "active" : ""} onClick={()=>setFirst("#")} /></a>
                    <a href="#about"><AiOutlineUser id="icon" className={first === "#about" ? "active" : ""} onClick={()=>setFirst("#about")} /></a>
                    <a href="#experience"><AiOutlineBook id="icon" className={first === "#experience" ? "active" : ""} onClick={()=>setFirst("#experience")} /></a>
                    <a href="#portfolio"><RiServiceLine id="icon" className={first === "#portfolio" ? "active" : ""} onClick={()=>setFirst("#portfoliio")} /></a>
                    <a href="#contact"><AiOutlineMessage id="icon" className={first === "#contact" ? "active" : ""} onClick={()=>setFirst("#contact")} /></a>
                </div>
            </div>
        </>
    );
}

export default Navbar;