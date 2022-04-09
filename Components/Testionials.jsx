import Image from 'next/image';
import PA from '../public/assets/avatar1.jpg'
import PB from '../public/assets/avatar2.jpg'
import PC from '../public/assets/avatar3.jpg'
import PD from '../public/assets/avatar4.jpg'
const Testionials = () => {
    return (
        <>
            <div id="testimonials">
                <div className="container">
                    <h6>Review from clients</h6>
                    <h5>Testimonials</h5>
                    <div className="cards">
                        <div className="card">
                            <Image src={PA} width="60" height="60" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Arindam saha</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga nisi! Iusto suscipit natus dignissimos magni quidem dolor ducimus cumque soluta itaque maxime eius mollitia nisi ad sint, eligendi quisquam.</p>
                        </div>
                        <div className="card">
                            <Image src={PB} width="60" height="60" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Arindam saha</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga nisi! Iusto suscipit natus dignissimos magni quidem dolor ducimus cumque soluta itaque maxime eius mollitia nisi ad sint, eligendi quisquam.</p>
                        </div>
                        <div className="card">
                            <Image src={PC} width="60" height="60" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Arindam saha</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga nisi! Iusto suscipit natus dignissimos magni quidem dolor ducimus cumque soluta itaque maxime eius mollitia nisi ad sint, eligendi quisquam.</p>
                        </div>
                        <div className="card">
                            <Image src={PD} width="60" height="60" objectFit='cover' alt='arnabs image' className="img"/>
                            <h4>Arindam saha</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga nisi! Iusto suscipit natus dignissimos magni quidem dolor ducimus cumque soluta itaque maxime eius mollitia nisi ad sint, eligendi quisquam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testionials;