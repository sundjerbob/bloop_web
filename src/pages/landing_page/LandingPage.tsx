import React, {useEffect, useState} from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";
import HeroSection from "../../components/hero_section/HeroSection.tsx";

const LandingPage: React.FC = () => {

    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => {
            (document.querySelector('.content-holder') as HTMLElement).classList.add('init');
        }, 1)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    const code = [
        'const c = 10',
        'if kita  == 25 ',
        '{',
        '   else Read (c)',
        '   Print (cacaj)',
        '   }',
        'for var b to c   ',
        '{',
        '   return micovanko var abvg += 8'
        , '}'
    ];


    return (
        <>

            <div className="content-holder">
                <div className="bg"/>
                <div className="slider" style={{transform: `translateX(${scrollPosition}px)`}}/>

                <HeroSection/>


                <AnimatedConsole code={code}/>


            </div>

        </>
    );
}

export default LandingPage;