import React, {useEffect, useState} from "react";
import CallToAction from "../../call_to_action/CallToAction.tsx";
import AnimatedConsole from "../console/AnimatedConsole.tsx";
import './style/ConsoleWrapper.css';


const ConsoleWrapper: React.FC = () => {

    const [consoleState_1, setConsoleState_1] = useState(false);
    const [consoleState_2, setConsoleState_2] = useState(false);


    function handleScroll() {
        if ((window.scrollY > 200) && !consoleState_2 ) {
            setConsoleState_2(true);
            setConsoleState_1(false)

        } else if ((window.scrollY < 200) && !consoleState_1  ) {
            setConsoleState_1(true);
            setConsoleState_2(false);
        }

    }

    window.addEventListener('scroll', handleScroll)
    useEffect(() => {

            setTimeout(() => {
                const consoleWrapper = document.querySelector('.console-wrapper') as HTMLElement;
                if (!consoleWrapper.classList.contains('init')) {
                    consoleWrapper.classList.add('init');
                    setConsoleState_1(true)
                }
            }, 0)
        }
        , []);

    return (
        <div className="console-wrapper">

            <span className="console-title">Bloop</span>

            <AnimatedConsole state={consoleState_1} consoleId="console1" code={consoleCode1}/>
            <AnimatedConsole state={consoleState_2} consoleId="console2" code={consoleCode2}/>

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
