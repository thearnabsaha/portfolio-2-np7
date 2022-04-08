import Image from 'next/image';
import DPA from '../public/assets/me-about.jpg'
import { send } from "../api/portfolios";
import PA from "../public/assets/portfolio1.jpg"
import PB from "../public/assets/portfolio2.jpg"
import PC from "../public/assets/portfolio3.jpg"
import PD from "../public/assets/portfolio4.jpg"
import PE from "../public/assets/portfolio5.png"
import PF from "../public/assets/portfolio6.jpg"

const Portfolio = () => {
    return (
        <>
            <div id="portfolio">
                <div className="container">
                    <h6>My Recent Work</h6>
                    <h5>Portfolio</h5>
                    <div className="cards">
                        {/* <div className="card">
                            <Image src={PA} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank" className='btn1'>Github</a>
                            <a href="" target="_blank" className='btn2'>Live Demo</a>
                        </div>
                        <div className="card">
                            <Image src={PB} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank" className='btn1'>Github</a>
                            <a href="" target="_blank" className='btn2'>Live Demo</a>
                        </div>
                        <div className="card">
                            <Image src={PC} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank" className='btn1'>Github</a>
                            <a href="" target="_blank" className='btn2'>Live Demo</a>
                        </div>
                        <div className="card">
                            <Image src={PD} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank" className='btn1'>Github</a>
                            <a href="" target="_blank" className='btn2'>Live Demo</a>
                        </div>
                        <div className="card">
                            <Image src={PE} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank" className='btn1'>Github</a>
                            <a href="" target="_blank" className='btn2'>Live Demo</a>
                        </div>
                        <div className="card">
                            <Image src={PF} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank" className='btn1'>Github</a>
                            <a href="" target="_blank" className='btn2'>Live Demo</a>
                        </div> */}
                        {
                            send.map((e)=>{
                                return <>
                                    <div className="card">
                                        <Image src={PB} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                                        <h4>{e.title}</h4>
                                        <a href="" target="_blank" className='btn1'>Github</a>
                                        <a href="" target="_blank" className='btn2'>Live Demo</a>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;