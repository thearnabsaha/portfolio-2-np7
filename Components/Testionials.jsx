import Image from 'next/image';
import {rec} from '../api/testimonials'

import React from "react";
const Testionials = () => {
    return (
        <>
            <div id="testimonials">
                <div className="container">
                    <h6>Review from clients</h6>
                    <h5>Testimonials</h5>
                    <div className="cards">
                    {
                        rec.map((e)=>{
                            return <>
                                <div className="card">
                                    <Image src={e.icon} width="60" height="60" objectFit='cover' alt='arnabs image' className="img"/>
                                    <h4>{e.title}</h4>
                                    <p>{e.desc}</p>
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

export default Testionials;