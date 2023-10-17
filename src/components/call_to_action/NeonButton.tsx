// NeonButton.txs

import React from "react";
import './style/NeonButton.css'
import play from '../../assets/play-button.svg'

const NeonButton: React.FC = () => {

    return (
        <div  className="neon-button">Start

            <img src={play}  alt='nema'/>
        </div>
    )
}
export default NeonButton