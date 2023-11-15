import React, {useEffect, useState} from "react";
import CallToAction from "../../call_to_action/CallToAction.tsx";
import AnimatedConsole from "../console/AnimatedConsole.tsx";
import './style/ConsoleWrapper.css';


const ConsoleWrapper: React.FC = () => {

    const [consoleState_1, setConsoleState_1] = useState(false);
    const [consoleState_2, setConsoleState_2] = useState(false);


    function handleScroll() {
        if ((window.scrollY > 200) && !consoleState_2) {
            setConsoleState_2(true);
            setConsoleState_1(false)

        } else if ((window.scrollY < 200) && !consoleState_1) {
            setConsoleState_1(true);
            setConsoleState_2(false);
        }


    }


    window.addEventListener('scroll', handleScroll)
    useEffect(() => {

            /*function rotateElement(event: MouseEvent, element: HTMLElement | null) {
                if (element === null) {
                    return;
                }

                const elementRect = element.getBoundingClientRect(); // Get the element's position and dimensions
                const x = event.clientX - elementRect.left; // Calculate cursor's x position relative to the element
                const y = event.clientY - elementRect.top;  // Calculate cursor's y position relative to the element

                const middleX = elementRect.width / 2;
                const middleY = elementRect.height / 2;

                const offsetX = ((x - middleX) / middleX) * 45;
                const offsetY = ((y - middleY) / middleY) * 45;

                // Apply the updated transform property directly to the element's style
                element.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
            }*/

            setTimeout(() => {

                const consoleWrapper = document.querySelector('.console-wrapper') as HTMLElement;
                //consoleWrapper.addEventListener('mousemove', event => rotateElement(event, consoleWrapper))

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
    'if c == 25 ',
    '{',
    'else Read (c)',
    'Print (cacaj)',
    '}',
    'for var b to c   ',
    '{',
    'return milovan var abvg += 8'
    , '}'
];

const consoleCode2: string[] = [
    'const olja  = beckovic + Print ()',
    'for 2 to olja ',
    '{',
    'else Read (c)',
    'Print (olja)',
    '}',
    'return minaMina',

]
