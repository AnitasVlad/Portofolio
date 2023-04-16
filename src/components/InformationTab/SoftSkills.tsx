import React from "react";
import Style from './InformationTab.module.css';
import SoftSkillsBubble from "../Bubble/SoftSkillsBubble";
function SoftSkills(){
    return (
        <div className={Style.container_center} id={Style.soft_skills_container}>
            <SoftSkillsBubble/>
            <p>Communication, Empathy,
                Creativity,
                Open-mindedness, Teamwork and Collaboration</p>
        </div>
    )
}
export default SoftSkills;