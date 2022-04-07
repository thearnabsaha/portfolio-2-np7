import { AiOutlineCheck } from "react-icons/ai";

const Experience = () => {
    return (
        <>
            <div id="experience">
                <div className="container">
                    <h6>What Skills I Have</h6>
                    <h5>My Experience</h5>
                    <div className="bigBox">
                        <div className="box">
                            <h4>Frontend Development</h4>
                            <div className="box1">
                                <div className="right">
                                    <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>HTML</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>Javascript</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>Tailwind</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="left">
                                    <div className="box2">
                                            <AiOutlineCheck className="icon"/>
                                            <div className="content">
                                                <h3>CSS</h3>
                                                <p>Intermediate</p>
                                            </div>
                                        </div>
                                    <div className="box2">
                                            <AiOutlineCheck className="icon"/>
                                            <div className="content">
                                                <h3>Bootstrap</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </div>
                                    <div className="box2">
                                            <AiOutlineCheck className="icon"/>
                                            <div className="content">
                                                <h3>React</h3>
                                                <p>Experienced</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="box">
                            <h4>Backend Development</h4>
                            <div className="box1">
                                <div className="right">
                                    <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>Node JS</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>PHP</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>Python</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="left">
                                    <div className="box2">
                                            <AiOutlineCheck className="icon"/>
                                            <div className="content">
                                                <h3>MySQL</h3>
                                                <p>Basic</p>
                                            </div>
                                        </div>
                                        <div className="box2">
                                        <AiOutlineCheck className="icon"/>
                                        <div className="content">
                                            <h3>MongoDB</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;