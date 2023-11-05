import React, {useEffect, useState} from "react";
import './style/LandingPage.css'
import HeroSection from "../../components/hero_section/HeroSection.tsx";
import ConsoleWrapper from "../../components/animated_console/console_wrapper/ConsoleWrapper.tsx";


const LandingPage: React.FC = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollThreshold: number = (30 * window.innerHeight) / 100;
    //ovo mi treba za consolu
    //element.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    const handleScroll = () => {
        setScrollPosition(window.scrollY);

    };

    useEffect(() => {


        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => (document.querySelector('.content-holder') as HTMLElement).classList.add('init'), 0)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (
        <>

            <div className="content-holder">
                <div className="bg"/>

                <div className="slider" style={
                    {
                        left: scrollPosition > scrollThreshold? 'calc(80vw +  ' + scrollPosition + 'px / 2)' : ''
                    }
                }

                />
                <div className="top-nav" style={{
                    opacity: scrollPosition > scrollThreshold ? 1 : 0,
                    transform: scrollPosition > scrollThreshold ? 'translateY(0)' : 'translateY(-250px)'
                }}/>
                <HeroSection/>


                <ConsoleWrapper/>


            </div>

        </>
    );
}

export default LandingPage;