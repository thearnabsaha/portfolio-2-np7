import { AiOutlineCheck } from "react-icons/ai";

const Experience = () => {
    return (
        <>
            <div id="experience">
                <div className="container">
                    <h4>What Skills I Have</h4>
                    <h3>My Experience</h3>
                    <div className="box">
                        <div className="left">
                            <h2>Frontend Development</h2>
                            <div className="smBox">
                                <div className="contentContainer">
                                    <div className="content">
                                        <h1> <AiOutlineCheck className="icon"/> HTML</h1>
                                        <p>experienced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                        <h2>Frontend Development</h2>
                            <div className="smBox">
                                <div className="contentContainer">
                                    <div className="content">
                                        <h1>HTML</h1>
                                        <p>experienced</p>
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