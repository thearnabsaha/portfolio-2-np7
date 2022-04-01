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
                        <Image src={DPA} width="280" height="450" objectFit='cover' objectPosition="top" alt='arnabs image' className="img"/>
                        </div>
                        <div className="right">
                            <div className="cards">
                                <div className="card">
                                    <BsFillAwardFill/>
                                    <p>Experience</p>
                                    <h5>3+ Years Working</h5>
                                </div>
                                <div className="card">
                                    <FiFolder/>
                                    <p>Clients</p>
                                    <h5>3200+ Worldwide</h5>
                                </div>
                                <div className="card">
                                    <FiUsers/>
                                    <p>Projects</p>
                                    <h5>80+ Completed</h5>
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