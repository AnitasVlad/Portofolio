import React from "react";
import Style from "./Bubble.module.css"

function WorkExperienceBubble()
{
    return (
        <div className={Style.bubble_container} id={Style.work_experience_bubble}>
            <p className={Style.bubble_text}>Work experience</p>
        </div>
    )
}
export default WorkExperienceBubble;