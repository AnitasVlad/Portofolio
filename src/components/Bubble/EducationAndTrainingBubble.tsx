import React from "react";
import Style from "./Bubble.module.css"

function EducationAndTrainingBubble()
{
    return (
        <div className={Style.bubble_container} id={Style.education_and_training_bubble}>
            <p className={Style.bubble_text}>Education and Training</p>
        </div>
    )
}
export default EducationAndTrainingBubble;