import x from "../assets/images/icon-close.svg"
import rules from "../assets/images/image-rules.svg"

import { MouseEventHandler } from 'react';

export default function Rules({toggleRules} : {toggleRules : MouseEventHandler<HTMLButtonElement>}) {
    return (
        <div className="rules">
            <h2 className="rules_title">RULES</h2>
            <img className="rules_image" src={rules} alt="rules" />
            <button onClick={toggleRules} className="rules_close">
                <img src={x} alt="Close button" />
            </button>
        </div>
    )
}