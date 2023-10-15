import React from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";

const LandingPage: React.FC = () => {
    return (
        <>
            <div className="background"/>
            <div className="content-holder">
                <div className="title">

                    <h2>This is BLOOP~$</h2>
                </div>
                <AnimatedConsole code={["for micaga je ",'mionicka je luda', 'for cacaj for kurac moj']}/>
            </div>
        </>
    );
}

export default LandingPage;