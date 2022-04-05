import {BsGithub,BsLinkedin} from "react-icons/bs";
// import CV from '../public/cv.pdf'
import DP from '../public/assets/me.png'
import Image from 'next/image';
const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <h5>Hello I'm</h5>
                    <h1>Arnab Saha</h1>
                    <h6>Fullstack Developer & Blockchain Developer</h6>
                    <div className="cta">
                        <a href={DP} download target="_blank">Download CV</a>
                        <a href="#contact" className="btn2">Let's Talk</a>
                    </div>
                    <div className="main">
                        <div className="socials">
                            <a href=""><BsGithub className="icon"/></a>
                            <a href=""><BsLinkedin className="icon"/></a>
                            <div className="line"></div>
                        </div>
                        <div className="dp">
                        <Image src={DP} width="280" height="450" objectFit='cover' objectPosition="top" alt='arnabs image' className="img"/>
                        </div>
                        <div className="scroll">
                            <p>Scroll Down</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;