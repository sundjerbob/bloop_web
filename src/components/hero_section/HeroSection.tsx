import React from "react";
import GlassButton from "../buttons/glass_button/GlassButton.tsx";
import './style/HeroSection.css'
const HeroSection: React.FC = ()=>
{
    return(
        <div className="hero-section">

            <div id="line1">This</div>
            <div id="line2">is</div>

            <span id="bloop">
                        <span>Bl</span>
                        <span className="elise">oo</span>
                        <span>p</span>
                        <span className="tilda">~</span>
                        <span>$</span>
                    </span>
            <div className="header">
                Bloop is a new programing lenguige that combines many cool features from other known lengages and introduces some of its own goodies.
                It is designed to make sintax and ussage seem intuitive and.
            </div>
            <GlassButton/>

        </div>
    );
}

export default HeroSection;