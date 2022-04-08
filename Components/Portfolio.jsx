import Image from 'next/image';
import DPA from '../public/assets/me-about.jpg'
const Portfolio = () => {
    return (
        <>
            <div id="portfolio">
                <div className="container">
                    <h6>My Recent Work</h6>
                    <h5>Portfolio</h5>
                    <div className="cards">
                        <div className="card">
                            <Image src={DPA} width="400" height="400" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Crypto Currency Dashboard & Financial Visualization</h4>
                            <a href="" target="_blank">Github</a>
                            <a href="" target="_blank">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;