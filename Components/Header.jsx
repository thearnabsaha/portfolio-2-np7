import {BsGithub,BsLinkedin} from "react-icons/bs";
import CV from '../public/assets/me.png'
import DP from '../public/assets/me.png'
import Image from 'next/image';
const Header = () => {
    return (
        <>
            <header id="header">
                <h5>Hello I'm</h5>
                <h1></h1>
                <h6>Fullstack Developer & Blockchain Developer</h6>
                <div className="cta">
                    <a href={CV} download >Download CV</a>
                    <a href="#contact">Let's Talk</a>
                </div>
                <div className="main">
                    <div className="socials">
                        <a href=""><BsGithub/></a>
                        <a href=""><BsLinkedin/></a>
                    </div>
                    <div className="dp">
                    <Image src={DP} width="300" height="500" objectFit='cover' alt='arnabs image' className="img"/>
                    </div>
                    <div className="scroll">
                        <p>Scroll Down</p>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;