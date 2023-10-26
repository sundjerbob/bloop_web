import React, {useEffect} from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";
import HeroSection from "../../components/hero_section/HeroSection.tsx";

const LandingPage: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            (document.querySelector('.content-holder') as HTMLElement).classList.add('init');
        }, 1)

    })


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
                <AnimatedConsole code={code}/>

                <div className="slider"/>
                <HeroSection/>


            </div>
        </>
    );
}

export default LandingPage;