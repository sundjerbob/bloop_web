// AnimatedConsole.tsx

import React, {useEffect} from "react";

import './style/AnimatedConsole.css';

interface AnimatedConsoleProps {
    consoleId: string,
    code: string[];
}

const AnimatedConsole: React.FC<AnimatedConsoleProps> = ({consoleId, code}) => {


    useEffect(() => {
        const console = document.getElementById(consoleId) as HTMLElement;

        setTimeout(() => console?.classList.add('start-typing'), 0);

    }, []);


    const delta: number = 0.01;
    let delaySum: number = 0.8;

    const indent: number = 50;
    let scopeDepth: number = 1;

    const renderedCode = code.map(
        (line, lineIndex) => {

            if (lineIndex > 0 && code[lineIndex - 1]?.trim() === '{')
                ++scopeDepth;
            if (line.trim() === '}')
                --scopeDepth;
            const renderedLine = line.split(' ').map(
                (word, wordIndex) => {

                    const renderedWord = word.split('').map(
                        (char, charIndex) => {
                            const charStyle = {'transition': `opacity 0s linear ${delaySum += delta}s`};
                            return (
                                <span key={charIndex + '-char'} style={charStyle}>
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
                        case 'to': {
                            color = 'keyword';
                            break;
                        }
                        case 'number':
                        case 'string':
                        case 'function':
                        case 'var':
                        case 'const': {
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
                        case '-=': {
                            color = 'operator';
                            break;
                        }
                    }
                    if (isNumeric(word)) {
                        color = 'num-const';
                    }

                    const wordStyle = {'transition': `color 0s linear ${delaySum}s`};
                    return (
                        <>
                        <span key={wordIndex + 'word'} className={color} style={wordStyle}>
                            {renderedWord}
                        </span>
                            <span key={wordIndex + 'ws'} style={{'transitionDelay': `${delaySum += delta}s`}}>{' '}</span>
                        </>
                    )
                });


            return (
                <div key={lineIndex}>
                    <span key={lineIndex + 'index'} className="comment"
                          style={{
                              'paddingRight': `${scopeDepth * indent}px`,
                              'transitionDelay': (delaySum - line.length * delta) + 's'
                          }}>{lineIndex}</span>
                    {renderedLine}
                </div>
            )

        });


    return (

        <div id={consoleId} className="console">
            {renderedCode}
            <span key={'cursor'} id="cursor">│</span>
        </div>

    );
};

function isNumeric(str: string): boolean {
    const numericPattern = /^-?\d+(\.\d+)?$/;
    return numericPattern.test(str);
}

export default AnimatedConsole;
