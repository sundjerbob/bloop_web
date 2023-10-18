import React from "react";
import NeonButton from "./neon_button/NeonButton.tsx";
import './style/CallToAction.css';

const CallToAction: React.FC = () => {
    return (
        <div className="call-to-action">
            <div className="prompt">
                <span>
                    <span className="comment"
                          style={
                              {
                                  'paddingRight': '50px',
                                  'paddingLeft': '25px'
                              }
                          }>
                        {'~$'}
                    </span>
                    {' Start coding now!'}
                </span>
            </div>
            <NeonButton/>
        </div>
    );
}
export default CallToAction;