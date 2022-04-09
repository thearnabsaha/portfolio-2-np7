import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <h6>Get In Touch</h6>
                    <h5>Contact Me</h5>
                    <div className="box">
                        <div className="left">
                            <div className="box1">
                                <AiOutlineMail/>
                                <h4>Email</h4>
                                <h3>dummy@one.com</h3>
                                <a href="#">Send a message</a>
                            </div>
                            <div className="box1">
                                <BsWhatsapp/>
                                <h4>WhatsApp</h4>
                                <h3>+79251805132</h3>
                                <a href="#">Send a message</a>
                            </div>
                        </div>
                        <div className="right">
                            <form className="form">
                                <input type="text" placeholder="Your Name"/>
                                <input type="text" placeholder="Your Email"/>
                                <textarea placeholder="Your Message"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;