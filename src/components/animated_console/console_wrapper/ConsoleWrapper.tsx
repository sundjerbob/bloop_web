import React, {useEffect, useState} from "react";
import CallToAction from "../../call_to_action/CallToAction.tsx";
import AnimatedConsole from "../console/AnimatedConsole.tsx";
import './style/ConsoleWrapper.css';


const ConsoleWrapper: React.FC = () => {

    const [scrollState, setScrollState] = useState(1);

    function handleScroll() {
        if ((window.scrollY > 200) && (scrollState === 1))
            setScrollState(2);
        else if ((window.scrollY < 200) && (scrollState === 2))
            setScrollState(1);
    }

    window.addEventListener('scroll', handleScroll)
    useEffect(() => {

            setTimeout(() => {
                const consoleWrapper = document.querySelector('.console-wrapper') as HTMLElement;
                if (!consoleWrapper.classList.contains('init'))
                    consoleWrapper.classList.add('init');
            }, 0)
        }
        , []);

    return (
        <div className="console-wrapper">

            <span className="console-title">Bloop</span>

            <AnimatedConsole consoleId="console-1" code={consoleCode1}/>

            <CallToAction/>

        </div>
    )
}
export default ConsoleWrapper;

const consoleCode1: string[] = [
    'const c = 10',
    'if kita  == 25 ',
    '{',
    'else Read (c)',
    'Print (cacaj)',
    '}',
    'for var b to c   ',
    '{',
    'return micovanko var abvg += 8'
    , '}'
];

const consoleCode2: string[] = [
    'const droa = beckovic + Print ()',
    'for 2 to drol ',
    '{',
    'else Read (c)',
    'Print ()',
    'return minaCigan',
    '}'
]
