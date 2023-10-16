import React, {useEffect} from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";

const LandingPage: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            (document.querySelector('.content-holder') as HTMLElement).classList.add('init');
        }, 1)

    })


    const code = [
        'const c = 10',
        'if majer == 25 ',
        '{',
        'Read (c)',
        'Print (cacaj)',
        '}',
        'for var b to c   ',
        '{' ,
        'return micovanko'
        ,'}'
    ];

    return (
        <>

            <div className="content-holder">
                <div className="slider"/>

                <div className="title">

                    <h2>
                        <div id="line1">This</div>
                        <div id="line2">is</div>
                        <span id="bloop">
                            <span id="b">B</span>l<span className="elise" >oo</span>p<span className="tilda">~$</span>
                        </span>
                    </h2>
                </div>

                <AnimatedConsole code={code}/>
            </div>
        </>
    );
}

export default LandingPage;