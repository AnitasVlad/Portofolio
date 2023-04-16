import React from "react";
import Style from './InformationTab.module.css';
import AboutMeBubble from "../Bubble/AboutMeBubble";

function AboutMe(){
    return (
        <>
            <div className={Style.container_left} id={Style.about_me_container}>
                <AboutMeBubble/>
                <p className={Style.text}> I consider myself as a sincere and dedicated person, with a curious mind that
                    keeps me active and persevering.<br/></p>
                <p className={Style.text}>As a perfectionist, it's a pleasure finding ways to make my code look and run
                    better.<br/></p>
                <p className={Style.text}>I am looking forward to joining a team in which I can pick up skills and grow as
                    both developer and person.</p>
            </div>
        </>
    );
}

export default AboutMe;