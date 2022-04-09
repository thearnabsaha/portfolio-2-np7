import Image from 'next/image';
const Testionials = () => {
    return (
        <>
            <div id="testimonials">
                <div className="container">
                    <h6>Review from clients</h6>
                    <h5>Testimonials</h5>
                    <div className="cards">
                        <div className="card">
                            <Image src={DPA} width="400" height="400" objectFit='cover' alt='arnabs image' className="img"/>
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