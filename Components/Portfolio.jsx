import Image from 'next/image';
import { send } from "../api/portfolios";
const Portfolio = () => {
    return (
        <>
            <div id="portfolio">
                <div className="container">
                    <h6>My Recent Work</h6>
                    <h5>Portfolio</h5>
                    <div className="cards">
                        {
                            send.map((e)=>{
                                return <div key={e.id}>
                                    <div className="card">
                                        <Image src={e.icon} width="300" height="300" objectFit='cover' alt='arnabs image' className="img"/>
                                        <h4>{e.title}</h4>
                                        <a href={e.github} target="_blank" className='btn1'>Github</a>
                                        <a href={e.demo} target="_blank" className='btn2'>Live Demo</a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;