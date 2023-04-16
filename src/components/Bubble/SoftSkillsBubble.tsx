import React from "react";
import Style from "./Bubble.module.css"
function SoftSkillsBubble()
{
    return (
        <div className={Style.bubble_container} id={Style.soft_skills_bubble}>
            <p className={Style.bubble_text}>Soft Skills</p>
        </div>
    )
}
export default SoftSkillsBubble;