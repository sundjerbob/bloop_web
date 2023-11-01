import React, {useEffect, useState} from "react";
import GlassButton from "../buttons/glass_button/GlassButton.tsx";
import './style/HeroSection.css'

const HeroSection: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollThreshold: number = (30 * window.innerHeight) / 100;

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {


        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            {scrollPosition < scrollThreshold && <div id="line1">This</div>}
            {scrollPosition < scrollThreshold && <div id="line2">is</div>}

            <div id="bloop" style=
                {
                    {
                        position: scrollPosition < scrollThreshold ? 'absolute' : 'fixed',
                        scale: scrollPosition < scrollThreshold ? '1' : '0.6',
                        top: scrollPosition < scrollThreshold ? '30vh' : '-40px',
                        transform: scrollPosition < scrollThreshold ? 'translateX(0)' : 'translateX(-33%)',

                        color: scrollPosition < scrollThreshold ? '#111010' : '#181616FF'
                    }
                }>
                <span>Bl</span>
                <span className="elise">oo</span>
                <span>p</span>
                <span className="tilda">~</span>
                <span>$</span>
            </div>
            {
                scrollPosition < scrollThreshold &&
                <div className="header">
                    Bloop is a new programing lenguage that combines many cool features from other known lengages and introduces some of its own
                    goodies.
                    It is designed to make sintax and ussage seem intuitive and.
                </div>
            }
            <GlassButton/>

        </>
    );
}

export default HeroSection;