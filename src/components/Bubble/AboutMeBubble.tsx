import React from "react";
import Style from "./Bubble.module.css"
function AboutMeBubble()
{
    return (
        <div className={Style.bubble_container} id={Style.about_me_bubble}>
            <p className={Style.bubble_text}>About me</p>
        </div>
    )
}
export default AboutMeBubble;