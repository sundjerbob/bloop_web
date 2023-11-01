import React, {useEffect, useState} from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";
import HeroSection from "../../components/hero_section/HeroSection.tsx";


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

                <div className="slider"

                     />
                <div className="top-nav" style={{
                    opacity: scrollPosition > scrollThreshold ? 1 : 0,
                    transform: scrollPosition > scrollThreshold ? 'translateY(0)' : 'translateY(-250px)'
                }}/>
                <HeroSection/>


                <AnimatedConsole code={code}/>


            </div>

        </>
    );
}

export default LandingPage;