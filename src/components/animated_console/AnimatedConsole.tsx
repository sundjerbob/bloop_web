// AnimatedConsole.tsx

import React, {useEffect, useState} from "react";
import CallToAction from "../call_to_action/CallToAction.tsx";
import './style/AnimatedConsole.css';


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
                        <span className={color} style={wordStyle}>
                            {renderedWord}
                            <span style={{'transitionDelay': `${delaySum += delta}s`}}>{' '}</span>
                        </span>
                    )
                });


            return (
                <div>
                    <span className="comment"
                          style={{
                              'paddingRight': `${scopeDepth * indent}px`,
                              'transitionDelay': (delaySum - line.length * delta) + 's'
                          }}>{lineIndex}</span>
                    {renderedLine}
                </div>
            )

        });

    /*
       function rotateElement(event: MouseEvent, element: HTMLElement | null) {
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
        }

    */


    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollThreshold: number = (30 * window.innerHeight) / 100;

    const handleScroll = () => {

        setScrollPosition(window.scrollY < scrollThreshold ? 0 : (window.scrollY - scrollThreshold) / 2);
    };
    useEffect(() => {
        const consoleWrapper = document.querySelector('.console-wrapper') as HTMLElement;
        window.addEventListener('scroll', handleScroll);

        setTimeout(
            () => {
                consoleWrapper.classList.add('start-typing');
                //window.addEventListener('mousemove', e => rotateElement(e, consoleWrapper))
            }, 1);

        return () => {
            //consoleWrapper.removeEventListener('mousemove', e => rotateElement(e, consoleWrapper))

        };
    })
    return (

        <div className="console-wrapper" style={{transform: 'rotateX(' + scrollPosition + 'deg)'}}>

            <span className="console-title">Bloop</span>
            <div className="console">
                {renderedCode}
                <span id="cursor">│</span>
            </div>

            <CallToAction/>

        </div>

    );
};

function isNumeric(str: string): boolean {
    const numericPattern = /^-?\d+(\.\d+)?$/;
    return numericPattern.test(str);
}

export default AnimatedConsole;
