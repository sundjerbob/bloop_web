// AnimatedConsole.tsx

import React, {useEffect} from "react";
import './style/AnimatedConsole.css'

interface AnimatedConsoleProps {
    code: string[];
}

const AnimatedConsole: React.FC<AnimatedConsoleProps> = ({code}) => {

    const delta: number = 0.01;
    let delaySum: number = 0.8;

    const indent: number = 50;
    let scopeDepth: number = 1;

    const renderedCode = code.map(
        (line, lineIndex) => {
            if (code[lineIndex - 1] === '{')
                ++scopeDepth;
            if (line.trim() === '}')
                --scopeDepth;
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
                        case 'for':
                        case 'return':
                        case 'while':
                        case 'if':
                        case 'else':
                        case 'as':
                         {
                            color = 'keyword';
                            break;
                        }
                        case 'number':
                        case 'string':
                        case 'function':
                        case 'var':
                        case 'const':{
                            color = 'type'
                            break;
                        }
                        case 'Read':
                        case 'Print': {
                            color = 'function';
                            break;
                        }
                        case '+':
                        case '-':
                        case'=':
                        case '==':
                        case '+=':
                        case '-=':{
                            color = 'operator';
                            break;
                        }

                    }
                    if(isNumeric(word))
                        color = 'num-const';

                    const wordStyle = {'transition': `color 0s linear ${delaySum}s`};
                    return (
                        <span className={color} style={wordStyle}>
                            {renderedWord}
                            <span style={{'transitionDelay': `${delaySum += delta}s`}}>{' '}</span>
                        </span>
                    )
                });


            return (
                <div>
                    <span style={{
                        'display': 'inline-block',
                        'color': '#767676',
                        'paddingRight': `${scopeDepth * indent}px`,
                        'transitionDelay': ((lineIndex === 0) ? delaySum : (delaySum - line.length * delta)) + 's'
                    }}>{lineIndex}</span>
                    {renderedLine}
                </div>
            )

        });


    useEffect(() => {
        setTimeout(
            () => {
                (document.querySelector('.console-wrapper') as HTMLElement)?.classList.add('start-typing');
            }, 300);


    })
    return (
        <>
            <div className="console-wrapper">
                <span className="console-title">Bloop</span>
                <div className="console">
                    {renderedCode}
                    <span id="cursor">│</span>
                </div>
            </div>
        </>

    );
};

function isNumeric(str: string): boolean {
    const numericPattern = /^-?\d+(\.\d+)?$/;
    return numericPattern.test(str);
}
export default AnimatedConsole;
