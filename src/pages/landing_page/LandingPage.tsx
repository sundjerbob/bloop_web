import React from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";

const LandingPage: React.FC = () => {
    return (
        <>
            <div className="background"/>
            <div className="content-holder">
                <div className="title">
                    <h4>This</h4>
                    <h4>is</h4>
                    <h2>BLOOP~$</h2>
                </div>
                <AnimatedConsole code={["for micaga je ",'mionicka je luda']}/>
            </div>
        </>
    );
}

export default LandingPage;