import React from "react";
import Style from "./Bubble.module.css"
function TechnicalSkillsBubble()
{
    return (
        <div className={Style.bubble_container} id={Style.technical_skills_bubble}>
            <p className={Style.bubble_text}>Technical Skills</p>
        </div>
    )
}
export default TechnicalSkillsBubble;