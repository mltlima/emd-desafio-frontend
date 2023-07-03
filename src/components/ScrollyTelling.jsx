import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Map from './Map';
import Model from './Model';
import '../styles/ScrollyTelling.css';

function ScrollyTelling() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.map-container', {
            scrollTrigger: {
                trigger: '.map-container',
                start: "top top",
                end: "50% center",
                scrub: true,
                pin: true // prevents the map from scrolling away immediately
            },
            opacity: 0
        });

        gsap.from('.model-container', {
            scrollTrigger: {
                trigger: '.map-container',
                start: "bottom center",
                end: "bottom top",
                scrub: true
            },
            opacity: 0
        });
    }, []);


    return (
        <div ref={sectionRef} style={{ height: '300vh' }}>
            <Map />
            <Model />
            <div style={{ height: '500vh' }} />
        </div>
    );
}

export default ScrollyTelling;
