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
                <AnimatedConsole code={
                    [
                        "majer for Print majer je ",
                        'mionicka je for majer',
                        'Print cacaj for  '
                    ]}/>
            </div>
        </>
    );
}

export default LandingPage;