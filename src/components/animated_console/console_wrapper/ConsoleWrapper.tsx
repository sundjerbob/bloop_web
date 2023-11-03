import React, {useEffect} from "react";
import CallToAction from "../../call_to_action/CallToAction.tsx";
import AnimatedConsole from "../console/AnimatedConsole.tsx";
import './style/ConsoleWrapper.css';


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

const ConsoleWrapper: React.FC = () => {

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

            <AnimatedConsole code={consoleCode1}/>

            <CallToAction/>

        </div>
    )
}
export default ConsoleWrapper;
