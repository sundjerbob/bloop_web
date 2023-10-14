import React from "react";
import './style/LandingPage.css'
import AnimatedConsole from "../../components/animated_console/AnimatedConsole.tsx";

const LandingPage: React.FC = () => {
    return (
        <>
            <div className="background"/>
            <div className="content-holder">
                <div className="title">
                    This
                    <div>is</div>
                    <h3>BLOOP:~$</h3>
                </div>
                <AnimatedConsole code={["for micaga je ",'mionicka je luda']}/>
            </div>
        </>
    );
}

export default LandingPage;