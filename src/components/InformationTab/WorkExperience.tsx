import React from "react";
import Style from './InformationTab.module.css';
import WorkExperienceBubble from "../Bubble/WorkExperienceBubble";

function WorkExperience(){
    return (
        <div className={Style.container_center} id={Style.work_experience_container}>
            <WorkExperienceBubble/>
            <p>Wedding Photographer 2021 - 2022</p>
        </div>
    )
}
export default WorkExperience;