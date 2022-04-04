import Image from 'next/image';
import { FiFolder,FiUsers } from "react-icons/fi";
import { BsFillAwardFill } from "react-icons/bs";
import DPA from '../public/assets/me-about.jpg'
const About = () => {
    return (
        <div>
            <div id="about">
                <div className="container">
                    <h5>Get To Know</h5>
                    <h1>About Me</h1>
                    <div className="box">
                        <div className="left">
                        <Image src={DPA} width="450" height="450" objectFit='cover' alt='arnabs image' className="img"/>
                        </div>
                        <div className="right">
                            <div className="cards">
                                <div className="card">
                                    <BsFillAwardFill className='icon'/>
                                    <p>Experience</p>
                                    <h4>3+ Years Working</h4>
                                </div>
                                <div className="card">
                                    <FiFolder className='icon'/>
                                    <p>Clients</p>
                                    <h4>3200+ Worldwide</h4>
                                </div>
                                <div className="card">
                                    <FiUsers className='icon'/>
                                    <p>Projects</p>
                                    <h4>80+ Completed</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente vero, aliquam error veritatis ducimus nisi, enim mollitia quaerat aspernatur praesentium nobis ab! Iste, voluptatum? Minus laboriosam possimus dolorem ab necessitatibus.</p>
                            <a href="">Let's Talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;