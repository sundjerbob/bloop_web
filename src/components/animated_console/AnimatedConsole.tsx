// AnimatedConsole.tsx

import React, {useEffect} from "react";
import './style/AnimatedConsole.css'

interface AnimatedConsoleProps {
    code: string[];
}

const AnimatedConsole: React.FC<AnimatedConsoleProps> = ({code}) => {

    const delta: number = 0.1;
    let delaySum: number = 0;

    const renderedCode = code.map(
        (line, lineIndex) => {

            const renderedLine = line.split(' ').map(
                word => {

                    const renderedWord = word.split('').map(
                        (char, charIndex) => {
                            const charStyle = {'transition': `opacity 0s linear ${delaySum += delta}s`};
                            return (
                                <span key={charIndex} style={charStyle}>
                                    {char}
                                </span>
                            );
                        });

                    let color;
                    switch (word) {
                        case 'for': {
                            color = 'keyword';
                            break;
                        }
                        case 'Print': {
                            color = 'function';
                            break;
                        }

                    }
                    console.log(delaySum);
                    const wordStyle = {'transition': `color 0s linear ${delaySum}s`};
                    return (
                        <span className={color} style={wordStyle}>
                            {renderedWord}
                            <span style={{'transitionDelay': `${delaySum += delta}s`}}>{' '}</span>
                        </span>
                    )
                });

            /* let lineIndexDelay: number = 0;
             for (let i: number = 1; i < code.length; ++i) {
                 lineIndexDelay += line.length * delta;
             }*/

            return (
                <div>
                    <span style={{
                        'display': 'inline-block',
                        'paddingRight': '100px',
                        'transitionDelay': ((lineIndex === 0) ? delta : (delaySum - line.length * delta)) + 's'
                    }}>{lineIndex}</span>
                    {renderedLine}
                </div>
            )

        });


    useEffect(() => {
        setTimeout(
            () => {
                (document.querySelector('.console') as HTMLElement)?.classList.add('start-typing');
            }, 500);


    })
    return (
        <div className="console">
            {renderedCode}
            <span>│</span>
        </div>
    );
};

export default AnimatedConsole;
