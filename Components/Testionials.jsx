import Image from 'next/image';
import PA from '../public/assets/avatar1.jpg'
import PB from '../public/assets/avatar2.jpg'
import PC from '../public/assets/avatar3.jpg'
import PD from '../public/assets/avatar4.jpg'
import {rec} from '../api/testimonials'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";




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