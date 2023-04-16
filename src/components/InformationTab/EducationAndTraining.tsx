import React from "react";
import Style from './InformationTab.module.css';
import EducationAndTrainingBubble from "../Bubble/EducationAndTrainingBubble";

function EducationAndTraining(){
    return (
        <div className={Style.container_right} id={Style.education_and_training_container}>
            <EducationAndTrainingBubble/>
            <p className={Style.text_title}>Full Stack .Net Developer - School of Applied Technology<br/></p>
            <p className={Style.subtext}>January 2023 - April 2023<br/><br/>
            Intensive 3-month training program with a focus on TDD, mob programming, and applied learning.<br/><br/></p>
            <p className={Style.text_title}>Java from Scratch - Software development Academy (SDA)</p>
            <p className={Style.subtext}>9 month academy focusing on web development with Java.<br/><br/></p>
            <p className={Style.text_title}>Highschool of Arts Aurel Popp - Architecture</p>
            <p className={Style.subtext}>Studied architecture and design.</p>
        </div>
    );
}
export default EducationAndTraining;