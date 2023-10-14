// AnimatedConsole.tsx

import React, {useEffect} from "react";
import './style/AnimatedConsole.css'

interface AnimatedConsoleProps {
    code: string[];
}

const AnimatedConsole: React.FC<AnimatedConsoleProps> = ({code}) => {

    const renderedCode = code.map(
        line => {

            const renderedLine = line.split(' ').map(
                word => {

                    const renderedWord = word.split('').map(
                        (char, index) => {

                            const transitionDelay = `${index * 0.2}s`;

                            const spanStyle = {
                                transitionDelay,
                            };

                            return (
                                <span key={index} style={spanStyle}>
                                    {char}
                                </span>
                            );

                        });

                    return (
                        <>
                            {renderedWord} <span>{' '}</span>
                        </>
                    )
                });
            return (
                <div>
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
            <div className="line">
                {renderedCode}
                <span>│</span>
            </div>
        </div>
    );
};

export default AnimatedConsole;
